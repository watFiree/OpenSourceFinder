const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');

const authRouter = express.Router();

authRouter.route('/signup').post(authController.signup);

authRouter.route('/signin').post(
  passport.authenticate('local', {
    session: false,
  }),
  authController.signin
);

module.exports = authRouter;
