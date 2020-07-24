import axios from 'axios';
import {
  REMOVE_APPLICATION_STARTED,
  REMOVE_APPLICATION_SUCCESS,
  REMOVE_APPLICATION_FAILURE,
} from '../actionTypes/applicationActions';

const removeApplicationStarted = () => ({
  type: REMOVE_APPLICATION_STARTED,
});

const removeApplicationSuccess = (data) => ({
  type: REMOVE_APPLICATION_SUCCESS,
  payload: data,
});

const removeApplicationFailure = (error) => ({
  type: REMOVE_APPLICATION_FAILURE,
  payload: error,
});

export const removeApplication = (id) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(removeApplicationStarted());
    axios
      .delete(`/application/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(removeApplicationSuccess(response.data)))
      .catch((err) => dispatch(removeApplicationFailure(err.response.data)));
  };
};
