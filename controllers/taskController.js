const Project = require('../models/Project');
const Task = require('../models/Task');

module.exports = {
  async createTask(req, res) {
    const { _id, title, content, expiration, status, importance, contributors } = req.body;
    const data = {
      creator: req.user,
      title,
      content,
      expiration,
      status,
      importance,
      contributors,
    };
    try {
      const project = await Project.findById(_id);
      if (!project) return res.status(404).send({ message: 'Project not found !' });
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
