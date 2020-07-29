import axios from 'axios';
import {
  PROMOTE_OR_DEGRADE_USER_STARTED,
  PROMOTE_USER_SUCCESS,
  DEGRADE_USER_SUCCESS,
  PROMOTE_OR_DEGRADE_USER_FAILURE,
} from '../actionTypes/projectsActions';

const promoteOrDegradeUserStarted = () => ({
  type: PROMOTE_OR_DEGRADE_USER_STARTED,
});

const promoteOrDegradeUserSuccess = (data) => ({
  type: data.type === 'promote' ? PROMOTE_USER_SUCCESS : DEGRADE_USER_SUCCESS,
  payload: data,
});

const promoteOrDegradeUserFailure = (error) => ({
  type: PROMOTE_OR_DEGRADE_USER_FAILURE,
  payload: error,
});

export const promoteOrDegradeUser = (input) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(promoteOrDegradeUserStarted());
    axios
      .put(`/project/user/`, input, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(promoteOrDegradeUserSuccess(response.data)))
      .catch((err) => dispatch(promoteOrDegradeUserFailure(err.response.data)));
  };
};
