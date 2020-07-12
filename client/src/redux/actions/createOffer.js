import axios from 'axios';
import {
  CREATE_OFFER_STARTED,
  CREATE_OFFER_SUCCESS,
  CREATE_OFFER_FAILURE,
} from '../actionTypes/offersActions';

const createOfferStarted = () => ({
  type: CREATE_OFFER_STARTED,
});

const createOfferSuccess = (data) => ({
  type: CREATE_OFFER_SUCCESS,
  payload: data,
});

const createOfferFailure = (error) => ({
  type: CREATE_OFFER_FAILURE,
  payload: error,
});

export const createOffer = (input) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(createOfferStarted());
    axios
      .post(`/offer`, input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(createOfferSuccess(response.data)))
      .catch((err) => dispatch(createOfferFailure(err.response.data.message)));
  };
};
