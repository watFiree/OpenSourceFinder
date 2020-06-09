const { Schema, model } = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, lowercase: true, required: true },
    avaible: { type: Number, default: 1 },
    projects: [{ projectId: Schema.Types.ObjectId }], // , ref: 'Project'
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = model('User', UserSchema, 'users');
