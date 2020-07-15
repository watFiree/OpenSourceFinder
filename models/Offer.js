const { Schema, model } = require('mongoose');

const OfferSchema = Schema({
  project: { type: Schema.Types.ObjectId, required: true, ref: 'Project' },
  name: { type: String, required: true },
  stack: [{ type: String, required: true }],
  position: { type: String, required: true },
  desc: String,
});

module.exports = model('Offer', OfferSchema, 'offers');
