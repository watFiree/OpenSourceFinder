import axios from 'axios';
import {
  CREATE_TASK_STARTED,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
} from '../actionTypes/tasksActions';

const createTaskStarted = () => ({
  type: CREATE_TASK_STARTED,
});

const createTaskSuccess = (data) => ({
  type: CREATE_TASK_SUCCESS,
  payload: data,
});

const createTaskFailure = (error) => ({
  type: CREATE_TASK_FAILURE,
  payload: error,
});

export const createTask = (input) => {
  return async (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(createTaskStarted());
    axios
      .post(`/task`, input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(createTaskSuccess(response.data)))
      .catch((err) => dispatch(createTaskFailure(err.response.data.message)));
  };
};
