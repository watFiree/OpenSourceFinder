import axios from 'axios';
import {
  INVITE_USER_STARTED,
  INVITE_USER_SUCCESS,
  INVITE_USER_FAILURE,
} from '../actionTypes/userActions';

const inviteUserStarted = () => ({
  type: INVITE_USER_STARTED,
});

const inviteUserSuccess = (data) => ({
  type: INVITE_USER_SUCCESS,
  payload: data,
});

const inviteUserFailure = (error) => ({
  type: INVITE_USER_FAILURE,
  payload: error,
});

export const inviteUser = (input) => {
  return async (dispatch) => {
    dispatch(inviteUserStarted());
    axios
      .post(`/user/invite`, input)
      .then((response) => dispatch(inviteUserSuccess(response.data)))
      .catch((err) => dispatch(inviteUserFailure(err.response.data)));
  };
};
