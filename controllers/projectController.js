const validator = require('validator');
const Project = require('../models/Project');
const User = require('../models/User');
const convertToSlug = require('../helpers/convertToSlug');

module.exports = {
  async createProject(req, res) {
    const { name, stack, about } = req.body;
    console.log(req.body);
    if (name === undefined || validator.isEmpty(name))
      return res.status(400).send({ message: 'Name is required ! ' });
    if (stack === undefined || stack.length === 0)
      return res.status(400).send({ message: 'Stack is required ! ' });
    if (about.biogram) {
      if (about.biogram.length > 20)
        return res.status(400).send({ message: 'Biogram too long ! ' });
    }

    const data = {
      name,
      slug: convertToSlug(name),
      admins: [req.user],
      users: [req.user],
      applications: [],
      offers: [],
      announcements: [],
      tasks: [],
      stack,
      about,
    };

    try {
      const exists = await Project.findOne({ name });
      if (exists)
        return res.status(400).send({ message: 'Project with this name already exists !' });
      const project = await new Project(data);
      await project.save();
      await User.findOneAndUpdate({ _id: req.user._id }, { $push: { projects: project } });
      return res.status(200).send(project);
    } catch (err) {
      return res.status(404).send({ message: 'Could not create :(', err });
    }
  },
  async getProject(req, res) {
    const { id } = req.params;
    try {
      const project = await Project.findById(id)
        .populate('admins', 'name')
        .populate('users', 'name');
      if (!project) return res.status(404).send({ message: 'Project does not exist ! ' });
      return res.status(200).send([project]);
    } catch (err) {
      return res.status(404).send({ message: 'Could not get project :(', err });
    }
  },
  async fetchAll(req, res) {
    try {
      const projects = await Project.find();
      return res.status(200).send(projects);
    } catch (err) {
      return res.status(404).send({ message: 'Something went wrong :(', err });
    }
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
