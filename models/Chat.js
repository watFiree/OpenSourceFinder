const { Schema, model } = require('mongoose');

const ChatSchema = new Schema({
  project: { type: Schema.Types.ObjectId, required: true, ref: 'Project' },
  messages: [{ text: String, userImage: String, userName: String, createdAt: Date }],
  activeUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = model('Chat', ChatSchema, 'chats');
