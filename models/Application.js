const { Schema, model } = require('mongoose');

const ApplicationSchema = Schema({
  offer: { type: Schema.Types.ObjectId, required: true, ref: 'Offer' },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  desc: { type: String, trim: true },
});

module.exports = model('Application', ApplicationSchema, 'applications');
