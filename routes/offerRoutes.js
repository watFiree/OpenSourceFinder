const express = require('express');
const offerController = require('../controllers/offerController');
const jwtAuth = require('../middlewares/auth-middleware');

const offerRouter = express.Router();

offerRouter.route('/:_id').get(jwtAuth, offerController.getOffer);

offerRouter.route('/').post(jwtAuth, offerController.createOffer);

module.exports = offerRouter;
