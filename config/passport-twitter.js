const passport = require('passport');
const passportTwitter = require('passport-twitter');
const User = require('../models/User');

const TwitterStrategy = passportTwitter.Strategy;

const config = {
  clientID: process.env.TWITTER_OAUTH_CLIENT_ID,
  clientSecret: process.env.TWITTER_OAUTH_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/',
  proxy: true,
};

const verify = async (token, tokenSecret, profile, done) => {
  console.log(token);
  console.log(profile);
  console.log('hello');
  try {
    const user = await User.find({ twitterId: profile.id });
    if (!user.length) {
      const data = {
        twitterId: profile.id,
        name: profile.name,
        email: profile.email,
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
  passport.use(new TwitterStrategy(config, verify));
};
