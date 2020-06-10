const Project = require('../models/Project');
const User = require('../models/User');

module.exports = {
  async createProject(req, res) {
    const { name, stack } = req.body;
    const data = {
      name,
      admins: [req.user],
      users: [req.user],
      stack,
    };

    try {
      const project = await new Project(data);
      await project.save();
      await User.findOneAndUpdate({ _id: req.user._id }, { $push: { projects: project } });
      return res.status(200).send(project);
    } catch (err) {
      return res.status(404).send(err);
    }
  },
  async getProject(req, res) {
    const { _id } = req.params;
    const project = await Project.findById({ _id })
      .populate('admins', 'name')
      .populate('users', 'name');
    return res.status(200).send(project);
  },
  async deleteProject(req, res) {
    const { _id } = req.params;
    try {
      const project = await Project.findById({ _id });
      if (!project) return res.status(404).send({ message: ' Project with this id not found !' });
      const users = await project.users;
      await User.updateMany({ _id: { $in: users } }, { $pull: { projects: _id } });
      await project.remove();
      return res.status(200).send({ message: 'Deleted successfuly !' });
    } catch (err) {
      return res.status(404).send({ message: ' Could not delete :(' });
    }
  },
};
