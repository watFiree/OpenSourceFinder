const mailgun = require('mailgun-js');
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
  async addUser(req, res) {
    const { projectId, userId } = req.body;
    try {
      const user = await User.findById(userId);
      if (!user) return res.status(404).send({ message: 'User not found !' });
      const project = await Project.findById(projectId);
      if (!project) return res.status(404).send({ message: 'Project not found !' });
      await user.projects.push(project);
      await user.save();
      await project.users.push(user);
      await user.save();
      return res.status(200).send(project);
    } catch (err) {
      return res.status(404).send({ message: 'Could not add user !' });
    }
  },
  async sendMailToResetPassword(req, res) {
    const { email } = req.body;
    const mg = mailgun({
      apiKey: process.env.MAILGUN_APIKEY,
      domain: process.env.MAILGUN_DOMAIN,
    });
    const resetDate = new Date(new Date().getTime() + 3600000).toISOString();
    const resetToken =
      Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).send({ message: 'User with this email not found !' });
      const data = {
        from: 'restartpassword@opensourcefinder.com',
        to: email,
        subject: 'Passoword restart',
        text: `
          Hello
          You can restart your password under this link:
          http://localhost:3000/forgot/${user._id}-${resetToken}
          (expires in 60 minutes)
        `,
      };
      await mg.messages().send(data, (error) => {
        if (error) res.status(400).send({ message: error });
      });
      await User.updateOne(
        { _id: user._id },
        {
          $set: {
            resetPasswordValidDate: resetDate,
            resetPasswordValidToken: resetToken,
          },
        }
      );
      return res.status(200).send({ message: 'Email to restart password sent !' });
    } catch (err) {
      return res.status(404).send({ message: 'User with this email not found !' });
    }
  },
  async resetPassword(req, res) {
    console.log(req.body);
    const { data, password, repeated } = req.body;
    const [id, resetToken] = data.split('-');
    try {
      if (id === undefined || resetToken === undefined)
        return res.status(400).send({ message: 'Invalid data !' });
      if (password !== repeated) return res.status(400).send({ message: "Password don't match !" });
      const user = await User.findById(id);
      if (!user) return res.status(404).send({ message: 'Invalid user id !' });
      if (user.googleId || user.githubId || user.twitterId)
        return res.status(400).send({ message: 'You are registered by outside services !' });
      if (resetToken !== user.resetPasswordValidToken)
        return res.status(400).send({ message: "You can't change your password!" });
      if (
        user.resetPasswordValidDate - new Date() > 3600000 ||
        user.resetPasswordValidDate - new Date() < 0
      )
        return res.status(400).send({ message: "You can't change your password!" });
      await user.setPassword(password);
      await user.save();
      return res.status(200).send({ message: 'Password changed successfully !' });
    } catch (err) {
      return res.status(404).send({ message: 'Could not change password !' });
    }
  },
};
