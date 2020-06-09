const express = require('express');
const userController = require('../controllers/userController');
const jwtAuth = require('../middlewares/token');

const userRouter = express.Router();

userRouter
  .route('/project')
  .get(jwtAuth, userController.getProject)
  .post(jwtAuth, userController.createProject);

module.exports = userRouter;
