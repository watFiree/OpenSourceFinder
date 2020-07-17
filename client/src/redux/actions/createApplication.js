import axios from 'axios';
import {
  CREATE_APPLICATION_STARTED,
  CREATE_APPLICATION_SUCCESS,
  CREATE_APPLICATION_FAILURE,
} from '../actionTypes/applicationActions';

const createApplicationStarted = () => ({
  type: CREATE_APPLICATION_STARTED,
});

const createApplicationSuccess = (data) => ({
  type: CREATE_APPLICATION_SUCCESS,
  payload: data,
});

const createApplicationFailure = (error) => ({
  type: CREATE_APPLICATION_FAILURE,
  payload: error,
});

export const createApplication = (input) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(createApplicationStarted());
    axios
      .post(`/application`, input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(createApplicationSuccess(response.data)))
      .catch((err) => dispatch(createApplicationFailure(err.response.data)));
  };
};
