const express = require('express');
const projectController = require('../controllers/projectController');
const jwtAuth = require('../middlewares/auth-middleware');

const projectRouter = express.Router();

projectRouter
  .route('/:slug')
  .get(jwtAuth, projectController.getProject)
  .delete(jwtAuth, projectController.deleteProject);

projectRouter
  .route('/')
  .get(projectController.fetchAll)
  .post(jwtAuth, projectController.createProject);

module.exports = projectRouter;
