const passport = require('passport');
const passportGithub = require('passport-github2');
const User = require('../models/User');

const GitHubStrategy = passportGithub.Strategy;

const config = {
  clientID: process.env.GITHUB_OAUTH_CLIENT_ID,
  clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
  callbackURL: '/auth/github/callback',
  scope: ['user:email'],
  proxy: true,
};

const verify = async (accessToken, refreshToken, profile, done) => {
  console.log(accessToken);
  console.log(profile);

  try {
    const user = await User.findOne({ githubId: profile.id });

    if (!user) {
      const data = {
        githubId: profile.id,
        name: profile.username,
        email: profile.emails[0].value,
      };
      const newUser = await new User(data);
      await newUser.save();
      return done(null, newUser);
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

module.exports = () => {
  passport.use(new GitHubStrategy(config, verify));
};
