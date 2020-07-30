const express = require('express');
const userController = require('../controllers/userController');
const jwtAuth = require('../middlewares/auth-middleware');

const userRouter = express.Router();

userRouter.route('/').get(jwtAuth, (req, res) => res.status(200).send(req.user));

userRouter.route('/invite').post(userController.inviteUser);

userRouter.route('/forgot').post(userController.forgotPassword);

module.exports = userRouter;
