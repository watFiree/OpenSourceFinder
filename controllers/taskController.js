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
  async removeTask(req, res) {
    const { _id } = req.params;
    try {
      const task = await Task.findById(_id);
      if (!task) return res.status(404).send({ message: 'Task not found ! ' });
      const projectId = task.project._id;
      const havePermissions = await Project.findOne({ _id: projectId, admins: req.user });
      if (!havePermissions)
        return res.status(404).send({ message: 'You cannot remove this task ! ' });
      await Task.deleteOne(task);
      const project = await Project.findOneAndUpdate(
        { _id: projectId },
        { $pull: { tasks: { $in: task._id } } }
      );
      if (!project) return res.status(404).send({ message: 'Project not found ! ' });
      return res.status(200).send({ taskId: _id, projectId: project._id });
    } catch (err) {
      return res.status(400).send({ message: 'Could not delete task ! ' });
    }
  },
};
