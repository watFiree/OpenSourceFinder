import axios from 'axios';
import {
  SEND_MESSAGE_STARTED,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from '../actionTypes/chatActions';

const sendMessageStarted = () => ({
  type: SEND_MESSAGE_STARTED,
});

const sendMessageSuccess = (data) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: data,
});

const sendMessageFailure = (error) => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
});

export const sendMessage = (input) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(sendMessageStarted());
    axios
      .post('/project/chat', input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(sendMessageSuccess(response.data)))
      .catch(({ response }) => dispatch(sendMessageFailure(response.data.message)));
  };
};
