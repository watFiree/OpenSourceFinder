import axios from 'axios';
import {
  CREATE_PROJECT_STARTED,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
} from '../actionTypes/projectsActions';

const createProjectStarted = () => ({
  type: CREATE_PROJECT_STARTED,
});

const createProjectSuccess = (data) => ({
  type: CREATE_PROJECT_SUCCESS,
  payload: data,
});

const createProjectFailure = (error) => ({
  type: CREATE_PROJECT_FAILURE,
  payload: error,
});

export const createProject = (input) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(createProjectStarted());
    axios
      .post(`/project`, input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(createProjectSuccess(response.data)))
      .catch((err) => dispatch(createProjectFailure(err.response.data)));
  };
};
