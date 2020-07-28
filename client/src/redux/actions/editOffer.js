import axios from 'axios';
import {
  EDIT_OFFER_STARTED,
  EDIT_OFFER_SUCCESS,
  EDIT_OFFER_FAILURE,
} from '../actionTypes/offersActions';

const editOfferStarted = () => ({
  type: EDIT_OFFER_STARTED,
});

const editOfferSuccess = (data) => ({
  type: EDIT_OFFER_SUCCESS,
  payload: data,
});

const editOfferFailure = (error) => ({
  type: EDIT_OFFER_FAILURE,
  payload: error,
});

export const editOffer = (input) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(editOfferStarted());
    axios
      .put(`/offer`, input, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(editOfferSuccess(response.data)))
      .catch((err) => dispatch(editOfferFailure(err.response.data)));
  };
};
