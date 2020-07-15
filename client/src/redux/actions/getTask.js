import axios from 'axios';
import { GET_TASK_STARTED, GET_TASK_SUCCESS, GET_TASK_FAILURE } from '../actionTypes/tasksActions';

const getTaskStarted = () => ({
  type: GET_TASK_STARTED,
});

const getTaskSuccess = (data) => ({
  type: GET_TASK_SUCCESS,
  payload: [data],
});

const getTaskFailure = (error) => ({
  type: GET_TASK_FAILURE,
  payload: error,
});

export const getTask = (id) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(getTaskStarted());
    axios
      .get(`/task/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(getTaskSuccess(response.data)))
      .catch((err) => dispatch(getTaskFailure(err.response.data)));
  };
};
