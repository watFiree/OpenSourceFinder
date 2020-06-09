const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const jwtAuth = require('../middlewares/token');

const authRouter = express.Router();

authRouter.route('/signup').post(authController.signup);

authRouter.route('/signin').post(
  passport.authenticate('local', {
    session: false,
  }),
  authController.signin
);

authRouter
  .route('/test')
  .post(jwtAuth, (req, res) => res.send({ message: 'you got it !', user: req.user }));

module.exports = authRouter;
