const Project = require('../models/Project');
const Task = require('../models/Task');

module.exports = {
  async getTask(req, res) {
    const { _id } = req.params;
    try {
      const task = await Task.findById(_id)
        .populate('creator', 'name')
        .populate('contributors', 'name');
      if (!task) return res.status(404).send({ message: 'Task not found ! ' });
      return res.status(200).send(task);
    } catch (err) {
      return res.status(404).send({ message: 'Task not found ! ' });
    }
  },
  async createTask(req, res) {
    const { id, title, content, expiration, status, taken } = req.body;
    const contributors = taken ? [req.user] : [];
    try {
      const project = await Project.findById(id);
      if (!project) return res.status(404).send({ message: 'Project not found !' });
      const data = {
        project,
        creator: req.user,
        title,
        content,
        expiration,
        status,
        contributors,
      };
      const task = await new Task(data);
      await task.save();
      await project.tasks.push(task);
      await project.save();
      return res.status(201).send(task);
    } catch (err) {
      return res.status(400).send({ message: 'Could not create task :(', err });
    }
  },
};
