const Project = require('../models/Project');
const Task = require('../models/Task');

module.exports = {
  async getTask(req, res) {
    const { _id } = req.params;
    const task = await Task.findById(_id).populate('creator', 'name');
    if (!task) return res.status(404).send({ message: 'Task not found ! ' });
    return res.status(200).send(task);
  },
  async createTask(req, res) {
    const { id, title, content, expiration, status, importance, contributors } = req.body;
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
        importance,
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
