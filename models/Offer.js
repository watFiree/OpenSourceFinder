const { Schema, model } = require('mongoose');

const OfferSchema = Schema({
  project: { type: Schema.Types.ObjectId, required: true, ref: 'Project' },
  stack: [{ type: String, required: true }],
  desc: String,
});

module.exports = model('Offer', OfferSchema, 'offers');
