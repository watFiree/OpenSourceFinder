const express = require('express');
const jwtAuth = require('../middlewares/auth-middleware');
const controller = require('../controllers/applicationController');

const applicationRouter = express.Router();

applicationRouter.route('/:_id').get(jwtAuth, controller.getApplication);

applicationRouter.route('/').post(jwtAuth, controller.createApplication);

module.exports = applicationRouter;
