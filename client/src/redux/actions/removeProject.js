import axios from 'axios';
import {
  REMOVE_PROJECT_STARTED,
  REMOVE_PROJECT_SUCCESS,
  REMOVE_PROJECT_FAILURE,
} from '../actionTypes/projectsActions';

const removeProjectStarted = () => ({
  type: REMOVE_PROJECT_STARTED,
});

const removeProjectSuccess = (data) => ({
  type: REMOVE_PROJECT_SUCCESS,
  payload: data,
});

const removeProjectFailure = (error) => ({
  type: REMOVE_PROJECT_FAILURE,
  payload: error,
});

export const removeProject = (id) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(removeProjectStarted());
    axios
      .delete(`/project/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(removeProjectSuccess(response.data)))
      .catch((err) => dispatch(removeProjectFailure(err.response.data)));
  };
};
