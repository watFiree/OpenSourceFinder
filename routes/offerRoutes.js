const express = require('express');
const offerController = require('../controllers/offerController');
const jwtAuth = require('../middlewares/auth-middleware');

const offerRouter = express.Router();

offerRouter
  .route('/:_id')
  .get(offerController.getOffer)
  .delete(jwtAuth, offerController.removeOffer);

offerRouter.route('/').post(jwtAuth, offerController.createOffer);

module.exports = offerRouter;
