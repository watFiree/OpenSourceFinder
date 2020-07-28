const { Schema, model } = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema(
  {
    googleId: String,
    githubId: String,
    twitterId: String,
    name: { type: String, trim: true, required: true },
    email: { type: String, lowercase: true, trim: true, required: true },
    avaible: { type: Number, default: 1 },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    stack: [{ type: String }],
    invitations: Array,
    about: String,
  },
  {
    timestamps: true,
  }
);

const options = {
  usernameField: 'email',
  errorMessages: {
    MissingPasswordError: 'No password was given',
    AttemptTooSoonError: 'Account is currently locked. Try again later',
    TooManyAttemptsError: 'Account locked due to too many failed login attempts',
    NoSaltValueStoredError: 'Authentication not possible. No salt value stored',
    IncorrectPasswordError: 'Password or username are incorrect',
    IncorrectUsernameError: 'Password or username are incorrect',
    MissingUsernameError: 'No username was given',
    UserExistsError: 'A user with the given username is already registered',
  },
};

UserSchema.plugin(passportLocalMongoose, options);
UserSchema.plugin(findOrCreate);

module.exports = model('User', UserSchema, 'users');
