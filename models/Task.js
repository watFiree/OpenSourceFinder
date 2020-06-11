const { Schema, model } = require('mongoose');

const TaskSchema = Schema({
  creator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  title: { type: String, required: true },
  content: { type: String, required: true },
  expiration: { type: Date, required: true },
  status: { type: String, required: true },
  importance: { type: String, required: true },
  contributors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = model('Task', TaskSchema, 'tasks');
