const express = require('express');
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

projectRouter.route('/chat/:id').get(jwtAuth, projectController.getChat);
projectRouter.route('/chat').post(jwtAuth, projectController.sendMessage);

module.exports = projectRouter;
