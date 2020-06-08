const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avaible: { type: Number, default: 1 },
    projects: [{ projectId: Schema.Types.ObjectId }], // , ref: 'Project'
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', UserSchema, 'users');
