const Project = require('../models/Project');
const User = require('../models/User');

module.exports = {
  async createProject(req, res) {
    const { name } = req.body;
    const data = {
      name,
      admins: [req.user],
      users: [req.user],
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
    const { name } = req.body;
    const project = await Project.findOne({ name })
      .populate('admins', 'name')
      .populate('users', 'name');
    console.log(project);
    return res.status(200).send(project);
  },
};
