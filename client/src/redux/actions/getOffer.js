import axios from 'axios';
import {
  GET_OFFER_STARTED,
  GET_OFFER_SUCCESS,
  GET_OFFER_FAILURE,
} from '../actionTypes/offersActions';

const getOfferStarted = () => ({
  type: GET_OFFER_STARTED,
});

const getOfferSuccess = (data) => ({
  type: GET_OFFER_SUCCESS,
  payload: [data],
});

const getOfferFailure = (error) => ({
  type: GET_OFFER_FAILURE,
  payload: error,
});

export const getOffer = (id) => {
  return (dispatch) => {
    dispatch(getOfferStarted());
    axios
      .get(`/offer/${id}`)
      .then((response) => dispatch(getOfferSuccess(response.data)))
      .catch((err) => dispatch(getOfferFailure(err.response.data)));
  };
};
