const passport = require('passport');
const passportGoogle = require('passport-google-oauth2');
const User = require('../models/User');

const GoogleStrategy = passportGoogle.Strategy;

const config = {
  clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
  proxy: true,
  passReqToCallback: true,
};

const verify = async (req, accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOne({ googleId: profile.id });
    if (!user) {
      const data = {
        googleId: profile.id,
        name: profile.given_name,
        email: profile.email,
      };
      const newUser = await new User(data);
      await newUser.save();
      console.log(newUser);
      req.user = newUser;
      return done(null, newUser);
    }
    req.user = user;
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

module.exports = () => {
  passport.use(new GoogleStrategy(config, verify));
};
