const express = require('express');
const userController = require('../controllers/userController');
const jwtAuth = require('../middlewares/auth-middleware');

const userRouter = express.Router();

userRouter.route('/').get(jwtAuth, (req, res) => res.status(200).send(req.user));

userRouter.route('/invite').post(userController.inviteUser);

userRouter.route('/forgotMail').post(userController.sendMailToResetPassword);

userRouter.route('/forgotReset').post(userController.resetPassword);

module.exports = userRouter;
