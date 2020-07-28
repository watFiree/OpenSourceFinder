const Project = require('../models/Project');
const Offer = require('../models/Offer');

module.exports = {
  async getOffer(req, res) {
    const { _id } = req.params;
    try {
      const offer = await Offer.findById(_id).populate('project', 'name');
      if (!offer) return res.status(404).send({ message: 'Offer not found ! ' });
      return res.status(200).send(offer);
    } catch (err) {
      return res.status(404).send({ message: 'Offer not found ! ' });
    }
  },
  async createOffer(req, res) {
    const { projectId, name, stack, desc } = req.body;
    if (stack === undefined || stack.length === 0)
      return res.status(400).send({ message: 'Stack is required ! ' });
    try {
      const project = await Project.findById(projectId);
      if (!project) return res.status(404).send({ message: 'Project not found !' });
      const offer = await new Offer({
        project,
        name,
        stack,
        desc,
      });
      await offer.save();
      await project.offers.push(offer);
      await project.save();
      return res.status(201).send(offer);
    } catch (err) {
      return res.status(404).send({ message: 'Could not create offer :(', err });
    }
  },
  async removeOffer(req, res) {
    const { _id } = req.params;
    try {
      const offer = await Offer.findById(_id);
      if (!offer) return res.status(404).send({ message: 'Offer not found ! ' });
      const projectId = offer.project._id;
      const havePermissions = await Project.findOne({ _id: projectId, admins: req.user });
      if (!havePermissions)
        return res.status(404).send({ message: 'You cannot remove this offer ! ' });
      await Offer.deleteOne(offer);
      const project = await Project.findOneAndUpdate(
        { _id: projectId },
        { $pull: { offers: { $in: offer._id } } }
      );
      if (!project) return res.status(404).send({ message: 'Project not found ! ' });
      return res.status(200).send({ offerId: _id, projectId: project._id });
    } catch (err) {
      return res.status(400).send({ message: 'Could not delete offer ! ' });
    }
  },
  async editOffer(req, res) {
    const { offerId, name, stack, desc } = req.body;
    try {
      const offer = await Offer.findById(offerId);
      if (!offer) return res.status(404).send({ message: 'Offer not found ! ' });
      const updated = await Offer.findOneAndUpdate(
        { _id: offerId },
        { name, stack, desc },
        { new: true }
      );
      return res.status(200).send(updated);
    } catch (err) {
      return res.status(404).send({ message: 'Could not edit offer ! ' });
    }
  },
};
