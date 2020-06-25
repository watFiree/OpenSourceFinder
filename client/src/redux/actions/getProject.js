import axios from 'axios';
import {
  GET_PROJECT_STARTED,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE,
} from '../actionTypes/projectsActions';

const getProjectStarted = () => ({
  type: GET_PROJECT_STARTED,
});

const getProjectSuccess = (data) => ({
  type: GET_PROJECT_SUCCESS,
  payload: data,
});

const getProjectFailure = (error) => ({
  type: GET_PROJECT_FAILURE,
  payload: error,
});

export const getProject = (id = '') => {
  return (dispatch) => {
    dispatch(getProjectStarted());
    axios
      .get(`/project/${id}`)
      .then((response) => dispatch(getProjectSuccess(response.data)))
      .catch((err) => dispatch(getProjectFailure(err.response.data.message)));
  };
};
