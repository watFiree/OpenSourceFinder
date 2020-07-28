import axios from 'axios';
import {
  EDIT_TASK_STARTED,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
} from '../actionTypes/tasksActions';

const editTaskStarted = () => ({
  type: EDIT_TASK_STARTED,
});

const editTaskSuccess = (data) => ({
  type: EDIT_TASK_SUCCESS,
  payload: data,
});

const editTaskFailure = (error) => ({
  type: EDIT_TASK_FAILURE,
  payload: error,
});

export const editTask = (input) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(editTaskStarted());
    axios
      .put(`/task`, input, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(editTaskSuccess(response.data)))
      .catch((err) => dispatch(editTaskFailure(err.response.data)));
  };
};
