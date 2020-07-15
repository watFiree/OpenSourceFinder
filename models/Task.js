const { Schema, model } = require('mongoose');

const TaskSchema = Schema({
  creator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  project: { type: Schema.Types.ObjectId, required: true, ref: 'Project' },
  title: { type: String, required: true },
  content: { type: String, required: true },
  expiration: { type: Date, default: null },
  status: { type: String, default: 'In progress' },
  contributors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = model('Task', TaskSchema, 'tasks');
