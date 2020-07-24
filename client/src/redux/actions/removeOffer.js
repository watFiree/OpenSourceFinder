import axios from 'axios';
import {
  REMOVE_OFFER_STARTED,
  REMOVE_OFFER_SUCCESS,
  REMOVE_OFFER_FAILURE,
} from '../actionTypes/offersActions';

const removeOfferStarted = () => ({
  type: REMOVE_OFFER_STARTED,
});

const removeOfferSuccess = (data) => ({
  type: REMOVE_OFFER_SUCCESS,
  payload: data,
});

const removeOfferFailure = (error) => ({
  type: REMOVE_OFFER_FAILURE,
  payload: error,
});

export const removeOffer = (id) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(removeOfferStarted());
    axios
      .delete(`/offer/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(removeOfferSuccess(response.data)))
      .catch((err) => dispatch(removeOfferFailure(err.response.data)));
  };
};
