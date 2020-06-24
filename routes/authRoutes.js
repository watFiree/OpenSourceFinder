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

authRouter.route('/google').get(
  passport.authenticate('google', {
    scope: [
      'profile',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  })
);

authRouter
  .route('/google/callback')
  .get(
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/signin' }),
    authController.google
  );

authRouter.route('/twitter').get(passport.authenticate('twitter'));
authRouter.route('/twitter/callback').get(
  passport.authenticate('twitter', {
    failureRedirect: 'http://localhost:3000/signin',
  }),
  authController.twitter
);

authRouter.route('/github').get(passport.authenticate('github', { scope: ['user:email'] }));
authRouter.route('/github/callback').get(
  passport.authenticate('github', {
    failureRedirect: 'http://localhost:3000/signin',
  }),
  authController.github
);

module.exports = authRouter;
