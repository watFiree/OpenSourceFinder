import axios from 'axios';
import * as types from '../actionTypes/userActions';

const signUserStarted = () => ({
  type: types.SIGN_USER_STARTED,
});

const signUserSuccess = (data) => ({
  type: types.SIGN_USER_SUCCESS,
  payload: data,
});

const signUserFailure = (error) => ({
  type: types.SIGN_USER_FAILURE,
  payload: error,
});

export const signUser = (input, uri) => {
  return (dispatch) => {
    dispatch(signUserStarted());
    axios
      .post(`/auth/${uri}`, {
        ...input,
      })
      .then((response) => dispatch(signUserSuccess(response.data)))
      .catch((err) => dispatch(signUserFailure(err.response.data)));
  };
};
