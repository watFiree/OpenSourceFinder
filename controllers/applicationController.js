const Application = require('../models/Application');
const Project = require('../models/Project');
const Offer = require('../models/Offer');

module.exports = {
  async getApplication(req, res) {
    const { _id } = req.params;
    try {
      const application = await Application.findById(_id)
        .populate('offer', 'name')
        .populate('user', 'name');
      if (!application) return res.status(404).send({ message: 'Application not found !' });
      return res.status(200).send(application);
    } catch (err) {
      return res.status(400).send({ message: 'Could not fin application !' });
    }
  },
  async createApplication(req, res) {
    const { offerId, desc } = req.body;
    const { user } = req;
    try {
      const project = await Project.findOne({ offers: offerId });
      if (!project) return res.status(404).send({ message: 'Project not found !' });
      const userInProject = await project.users.includes(user._id);
      if (userInProject)
        return res.status(400).send({ message: 'You already belong to this project!' });
      const alreadyApplicated = await Application.findOne({
        offer: offerId,
        user,
      });
      if (alreadyApplicated)
        return res.status(400).send({ message: 'You have already applicated to this project !' });
      const application = await new Application({ user, offer: offerId, desc });
      console.log(application);
      await application.save();
      await project.applications.push(application);
      await project.save();
      return res.status(200).send({ message: 'Application sent !' });
    } catch (err) {
      return res.status(400).send({ message: ' Could not create application !' });
    }
  },
};
