import axios from 'axios';
import {
  GET_APPLICATION_STARTED,
  GET_APPLICATION_SUCCESS,
  GET_APPLICATION_FAILURE,
} from '../actionTypes/applicationActions';

const getApplicationStarted = () => ({
  type: GET_APPLICATION_STARTED,
});

const getApplicationSuccess = (data) => ({
  type: GET_APPLICATION_SUCCESS,
  payload: [data],
});

const getApplicationFailure = (error) => ({
  type: GET_APPLICATION_FAILURE,
  payload: error,
});

export const getApplication = (id) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(getApplicationStarted());
    axios
      .get(`/application/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(getApplicationSuccess(response.data)))
      .catch((err) => dispatch(getApplicationFailure(err.response.data)));
  };
};
