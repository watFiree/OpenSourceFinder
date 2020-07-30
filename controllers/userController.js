const User = require('../models/User');
const Project = require('../models/Project');

module.exports = {
  async inviteUser(req, res) {
    const { name, projectId, projectName } = req.body;
    const data = { projectId, projectName };
    try {
      const user = await User.findOne({ name });
      if (!user) return res.status(404).send({ message: 'User not found !' });
      const inProject = await Project.findOne({ _id: projectId, users: user._id });
      if (inProject) return res.status(400).send({ message: 'User already in this project !' });
      const invited = await User.findOne({ name, 'invitations.projectId': projectId });
      if (invited) return res.status(400).send({ message: 'User already invited !' });
      await user.invitations.push(data);
      await user.save();
      return res.status(200).send({ message: 'User invited successfully !' });
    } catch (err) {
      return res.status(400).send({ message: 'Could not invite user !' });
    }
  },
  async forgotPassword(req, res) {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).send({ message: 'User with this email not found !' });
      return res.status(200).send({ user });
    } catch (err) {
      return res.status(404).send({ message: 'User with this email not found !' });
    }
  },
};
