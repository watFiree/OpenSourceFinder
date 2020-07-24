import axios from 'axios';
import {
  REMOVE_TASK_STARTED,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILURE,
} from '../actionTypes/tasksActions';

const removeTaskStarted = () => ({
  type: REMOVE_TASK_STARTED,
});

const removeTaskSuccess = (data) => ({
  type: REMOVE_TASK_SUCCESS,
  payload: data,
});

const removeTaskFailure = (error) => ({
  type: REMOVE_TASK_FAILURE,
  payload: error,
});

export const removeTask = (id) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(removeTaskStarted());
    axios
      .delete(`/task/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(removeTaskSuccess(response.data)))
      .catch((err) => dispatch(removeTaskFailure(err.response.data)));
  };
};
