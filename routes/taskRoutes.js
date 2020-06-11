const express = require('express');
const taskController = require('../controllers/taskController');
const jwtAuth = require('../middlewares/auth-middleware');

const taskRouter = express.Router();

taskRouter.route('/').post(jwtAuth, taskController.createTask);

module.exports = taskRouter;
