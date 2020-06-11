const { Schema, model } = require('mongoose');

const AnnouncementSchema = Schema({
  creator: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = model('Announcement', AnnouncementSchema, 'announcements');
