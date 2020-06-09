const passport = require('passport');
const passportJwt = require('passport-jwt');
const User = require('../models/User');

const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const config = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const verify = async (payload, done) => {
  try {
    const user = await User.findById(payload.id);
    if (!user) return done(null, false);

    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

module.exports = () => {
  passport.use(new JWTStrategy(config, verify));
};
