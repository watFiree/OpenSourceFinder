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
    const { projectId, title, content, expiration, status, taken } = req.body;
    const contributors = taken ? [req.user] : [];
    try {
      const project = await Project.findById(projectId);
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
      await project.activity.push({ text: 'Created task ', type: 'Add', date: new Date() });
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
        {
          $pull: { tasks: { $in: task._id } },
          $push: { activity: { text: 'Removed task ', type: 'Remove', date: new Date() } },
        }
      );
      if (!project) return res.status(404).send({ message: 'Project not found ! ' });
      return res.status(200).send({ taskId: _id, projectId: project._id });
    } catch (err) {
      return res.status(400).send({ message: 'Could not delete task ! ' });
    }
  },
  async editTask(req, res) {
    const { taskId, title, content, expiration } = req.body;
    try {
      const task = await Task.findById(taskId);
      if (!task) return res.status(404).send({ message: 'Task not found ! ' });
      const updated = await Task.findOneAndUpdate(
        { _id: taskId },
        { title, content, expiration },
        { new: true }
      );
      await Project.findByIdAndUpdate(task.project, {
        $push: { activity: { text: 'Edited task ', type: 'Edit', date: new Date() } },
      });
      return res.status(200).send(updated);
    } catch (err) {
      return res.status(404).send({ message: 'Could not edit offer ! ' });
    }
  },
};
