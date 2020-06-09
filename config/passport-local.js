const passport = require('passport');
const User = require('../models/User');

module.exports = () => {
  passport.use(User.createStrategy());
};
