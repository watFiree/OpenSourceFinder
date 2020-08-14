import * as types from '../actionTypes/chatActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const chatsReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case types.GET_CHAT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CHAT_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null,
      };
    case types.GET_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default chatsReducer;
