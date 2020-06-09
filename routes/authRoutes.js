const express = require('express');
const passport = require('passport');
const AuthController = require('../controllers/authController');
const jwtAuth = require('../middlewares/token');

const authRouter = express.Router();

authRouter.route('/signup').post(AuthController.signup);

authRouter
  .route('/signin')
  .post(
    passport.authenticate('local', { session: false }),
    AuthController.signin
  );

authRouter
  .route('/test')
  .post(jwtAuth, (req, res) => res.send({ message: 'you got it !' }));

module.exports = authRouter;
