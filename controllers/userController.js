const User = require('../models/User');

module.exports = {
  async inviteUser(req, res) {
    console.log(req.body);
    const { name, projectId, projectName } = req.body;
    const data = { projectId, projectName };
    try {
      const user = await User.findOne({ name });
      console.log(user);
      if (!user) return res.status(404).send({ message: 'User not found !' });
      await user.invitations.push(data);
      await user.save();
      return res.status(200).send({ message: 'User invited successfully !' });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ message: 'Could not invite user !' });
    }
  },
};
