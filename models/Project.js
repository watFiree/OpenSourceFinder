const { Schema, model } = require('mongoose');

const ProjectSchema = Schema({
  name: { type: String, trim: true, required: true },
  slug: String,
  admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  applications: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  offers: [{ type: Schema.Types.ObjectId, ref: 'Offer' }],
  stack: [{ type: String, required: true }],
  about: {
    links: [{ type: String }],
    desc: String,
  },
  announcements: [{ type: Schema.Types.ObjectId, ref: 'Announcement' }],
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
});

module.exports = model('Project', ProjectSchema, 'projects');
