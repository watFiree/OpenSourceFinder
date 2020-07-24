const express = require('express');
const projectController = require('../controllers/projectController');
const jwtAuth = require('../middlewares/auth-middleware');

const projectRouter = express.Router();

projectRouter
  .route('/:id')
  .get(projectController.getProject)
  .delete(jwtAuth, projectController.removeProject);

projectRouter.route('/user').delete(jwtAuth, projectController.removeUser);

projectRouter
  .route('/')
  .get(projectController.fetchAll)
  .post(jwtAuth, projectController.createProject);

module.exports = projectRouter;
