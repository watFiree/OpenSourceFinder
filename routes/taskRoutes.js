const express = require('express');
const taskController = require('../controllers/taskController');
const jwtAuth = require('../middlewares/auth-middleware');

const taskRouter = express.Router();

taskRouter
  .route('/:_id')
  .get(jwtAuth, taskController.getTask)
  .delete(jwtAuth, taskController.removeTask);

taskRouter
  .route('/')
  .post(jwtAuth, taskController.createTask)
  .put(jwtAuth, taskController.editTask);

module.exports = taskRouter;
