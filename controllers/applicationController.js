const Application = require('../models/Application');
const Project = require('../models/Project');

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
      await application.save();
      await project.applications.push(application);
      await project.activity.push({ text: 'Received application ', type: 'Add', date: new Date() });
      await project.save();
      await project.save();
      return res.status(200).send({ message: 'Application sent !' });
    } catch (err) {
      return res.status(400).send({ message: ' Could not create application !' });
    }
  },
  async removeApplication(req, res) {
    const { _id } = req.params;
    try {
      const application = await Application.findById(_id);
      if (!application) return res.status(404).send({ message: 'Application not found ! ' });
      const projectId = application.project._id;
      const havePermissions = await Project.findOne({ _id: projectId, admins: req.user });
      if (!havePermissions)
        return res.status(404).send({ message: 'You cannot remove this application ! ' });
      await Application.deleteOne(application);
      const project = await Project.findOneAndUpdate(
        { _id: projectId },
        {
          $pull: { applications: { $in: application._id } },
          $push: { activity: { text: 'Denied application ', type: 'Remove', date: new Date() } },
        }
      );
      if (!project) return res.status(404).send({ message: 'Project not found ! ' });
      return res.status(200).send({ applicationId: _id, projectId: project._id });
    } catch (err) {
      return res.status(400).send({ message: 'Could not delete application ! ' });
    }
  },
};
