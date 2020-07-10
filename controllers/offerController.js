const Project = require('../models/Project');
const Offer = require('../models/Offer');

module.exports = {
  async getOffer(req, res) {
    const { _id } = req.params;
    const offer = await Offer.findById(_id).populate('project', 'name');
    if (!offer) return res.status(404).send({ message: 'Offer not found ! ' });
    return res.status(200).send(offer);
  },
  async createOffer(req, res) {
    const { _id, name, stack, desc } = req.body;
    if (stack === undefined || stack.length === 0)
      return res.status(400).send({ message: 'Stack is required ! ' });
    try {
      const project = await Project.findById(_id);
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
};
