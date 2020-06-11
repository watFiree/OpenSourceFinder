const Project = require('../models/Project');
const Offer = require('../models/Offer');

module.exports = {
  async createOffer(req, res) {
    const { _id, stack, desc } = req.body;
    try {
      const project = await Project.findById(_id);
      if (!project) return res.status(404).send({ message: 'Project not found !' });
      const offer = await new Offer({
        project,
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
};
