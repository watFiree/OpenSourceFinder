const { Types } = require('mongoose');
const validator = require('validator');
const Project = require('../models/Project');
const User = require('../models/User');
const Offer = require('../models/Offer');
const Task = require('../models/Task');
const Application = require('../models/Application');
const Chat = require('../models/Chat');
const convertToSlug = require('../helpers/convertToSlug');

module.exports = {
  async createProject(req, res) {
    const { name, stack, about } = JSON.parse(req.body.data);
    console.log(name, stack, about);
    if (name === undefined || validator.isEmpty(name))
      return res.status(400).send({ message: 'Name is required ! ' });
    if (stack === undefined || stack.length === 0)
      return res.status(400).send({ message: 'Stack is required ! ' });
    if (about.biogram) {
      if (about.biogram.length > 20)
        return res.status(400).send({ message: 'Biogram too long ! ' });
    }

    const data = {
      _id: Types.ObjectId(),
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
      image: req.file.path ? req.file.path : '',
    };

    try {
      const exists = await Project.findOne({ name });
      if (exists)
        return res.status(400).send({ message: 'Project with this name already exists !' });
      const chat = await new Chat({ project: data._id, messages: [], activeUsers: [] });
      await chat.save();
      const project = await new Project({ ...data, chat });
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
        .populate('users', 'name')
        .populate('offers', 'name');
      if (!project) return res.status(404).send({ message: 'Project does not exist ! ' });
      return res.status(200).send([project]);
    } catch (err) {
      return res.status(404).send({ message: 'Could not get project :(', err });
    }
  },
  async fetchAll(req, res) {
    try {
      const projects = await Project.find()
        .populate('admins', 'name')
        .populate('users', 'name')
        .populate('offers', 'name');
      return res.status(200).send(projects);
    } catch (err) {
      return res.status(404).send({ message: 'Something went wrong :(', err });
    }
  },
  async editProject(req, res) {
    const { _id, name, stack, about } = req.body;
    try {
      const project = await Project.findById(_id);
      const alreadyExists = await Project.findOne({ name });
      if (name !== project.name && alreadyExists)
        return res.status(404).send({ message: 'Project name already taken ! ' });
      if (!project) return res.status(404).send({ message: 'Project not found ! ' });
      const updated = await Project.findOneAndUpdate(
        { _id },
        {
          name,
          slug: convertToSlug(name),
          stack,
          about,
          $push: {
            activity: {
              text: 'Edited project data',
              type: 'Edit',
              date: new Date(),
            },
          },
        },
        { new: true }
      );
      return res.status(200).send(updated);
    } catch (err) {
      return res.status(404).send({ message: 'Could not edit project ! ' });
    }
  },
  async removeProject(req, res) {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      if (!project) return res.status(404).send({ message: ' Project with this id not found !' });
      const users = await project.users;
      const applications = await project.applications;
      await User.updateMany({ _id: { $in: users } }, { $pull: { projects: id } });
      await Task.deleteMany({ project });
      await Offer.deleteMany({ project });
      await Application.deleteMany({ _id: { $in: applications } });
      await Project.deleteOne(project);
      return res.status(200).send({
        projectId: id,
        offersIds: project.offers,
        applicationsIds: project.applications,
        tasksIds: project.tasks,
      });
    } catch (err) {
      return res.status(404).send({ message: ' Could not delete :(' });
    }
  },
  async removeUser(req, res) {
    const { userId, projectId } = req.body;
    try {
      const user = await User.findByIdAndUpdate({ userId }, { $pull: { projects: projectId } });
      if (!user) return res.status(400).send({ message: 'User not found !' });
      const project = await Project.findByIdAndUpdate(
        { projectId },
        {
          $pull: { user: userId },
          $push: {
            activity: { text: 'Removed user', type: 'Remove', date: new Date() },
          },
        }
      );
      if (!project) return res.status(400).send({ message: 'Project not found !' });
      return res.status(200).send({ userId, projectId });
    } catch (err) {
      return res.status(404).send({ message: 'Could not remove this user !' });
    }
  },
  async promoteOrDegradeUser(req, res) {
    const { projectId, userId, type } = req.body;
    if (type !== 'promote' || type !== 'degrade')
      return res.status(400).send({ message: 'Type not passed !' });
    try {
      const project = Project.findById(projectId);
      if (!project) return res.status(404).send({ message: 'Project not found !' });
      const user = User.findById(userId);
      if (!user) return res.status(404).send({ message: 'User not found !' });
      if (type === 'promote') {
        await project.admins.push(user);
        await project.activity.push({
          text: 'Promoted user',
          type: 'Promote',
          date: new Date(),
        });
      } else if (type === 'degrade') {
        await project.admins.pull(user);
        await project.activity.push({
          text: 'Degraded user',
          type: 'Degrade',
          date: new Date(),
        });
      }
      await project.save();
      return res.status(200).send({ projectId, userId, type });
    } catch (err) {
      return res.status(404).send({ message: 'Could not promote user !' });
    }
  },
  async getChat(req, res) {
    const { id } = req.params;
    try {
      const chat = await Chat.findById(id);
      if (!chat) return res.status(404).send({ message: 'Chat not found !' });
      return res.status(200).send(chat);
    } catch (err) {
      return res.status(404).send({ message: 'Could not find this chat !' });
    }
  },
  async sendMessage(req, res) {
    const { chatId, text, userName, userImage, createdAt } = req.body;
    try {
      const chat = await Chat.findById(chatId);
      if (!chat) return res.status(404).send({ message: 'Chat not found !' });
      await chat.messages.push(req.body);
      await chat.save();
      return res.status(200).send(req.body);
    } catch (err) {
      return res.status(404).send({ message: 'Could send message !' });
    }
  },
};
