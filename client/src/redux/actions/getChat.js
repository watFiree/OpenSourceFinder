import axios from 'axios';
import { GET_CHAT_STARTED, GET_CHAT_SUCCESS, GET_CHAT_FAILURE } from '../actionTypes/chatActions';

const getChatStarted = () => ({
  type: GET_CHAT_STARTED,
});

const getChatSuccess = (data) => ({
  type: GET_CHAT_SUCCESS,
  payload: data,
});

const getChatFailure = (error) => ({
  type: GET_CHAT_FAILURE,
  payload: error,
});

export const getChat = (id) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(getChatStarted());
    axios
      .get(`/project/chat/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(getChatSuccess(response.data)))
      .catch(({ response }) => dispatch(getChatFailure(response.data.message)));
  };
};
