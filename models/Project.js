const { Schema, model } = require('mongoose');

const ProjectSchema = Schema({
  name: { type: String, trim: true, required: true },
  admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  stack: [{ type: String }],
});

module.exports = model('Project', ProjectSchema, 'projects');
