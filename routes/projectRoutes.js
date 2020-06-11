const express = require('express');
const projectController = require('../controllers/projectController');
const jwtAuth = require('../middlewares/auth-middleware');

const userRouter = express.Router();

userRouter
  .route('/:_id')
  .get(jwtAuth, projectController.getProject)
  .delete(jwtAuth, projectController.deleteProject);

userRouter.route('/').post(jwtAuth, projectController.createProject);

module.exports = userRouter;
