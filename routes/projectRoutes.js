const express = require('express');
const multer = require('multer');
const projectController = require('../controllers/projectController');
const jwtAuth = require('../middlewares/auth-middleware');
const upload = require('../config/multerStorage');

const projectRouter = express.Router();

projectRouter
  .route('/:id')
  .get(projectController.getProject)
  .delete(jwtAuth, projectController.removeProject);

projectRouter
  .route('/')
  .get(projectController.fetchAll)
  .post(jwtAuth, upload.single('image'), projectController.createProject)
  .put(jwtAuth, projectController.editProject);

projectRouter
  .route('/user')
  .delete(jwtAuth, projectController.removeUser)
  .put(jwtAuth, projectController.promoteOrDegradeUser);

module.exports = projectRouter;
