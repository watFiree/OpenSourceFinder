import axios from 'axios';
import {
  EDIT_PROJECT_STARTED,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE,
} from '../actionTypes/projectsActions';

const editProjectStarted = () => ({
  type: EDIT_PROJECT_STARTED,
});

const editProjectSuccess = (data) => ({
  type: EDIT_PROJECT_SUCCESS,
  payload: data,
});

const editProjectFailure = (error) => ({
  type: EDIT_PROJECT_FAILURE,
  payload: error,
});

export const editProject = (input) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(editProjectStarted());
    axios
      .put(`/project`, input, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(editProjectSuccess(response.data)))
      .catch((err) => dispatch(editProjectFailure(err.response.data)));
  };
};
