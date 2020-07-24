import axios from 'axios';
import {
  REMOVE_USER_STARTED,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
} from '../actionTypes/projectsActions';

const removeUserStarted = () => ({
  type: REMOVE_USER_STARTED,
});

const removeUserSuccess = (data) => ({
  type: REMOVE_USER_SUCCESS,
  payload: data,
});

const removeUserFailure = (error) => ({
  type: REMOVE_USER_FAILURE,
  payload: error,
});

export const removeUser = (input) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(removeUserStarted());
    axios
      .delete(
        `/project/user/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        input
      )
      .then((response) => dispatch(removeUserSuccess(response.data)))
      .catch((err) => dispatch(removeUserFailure(err.response.data)));
  };
};
