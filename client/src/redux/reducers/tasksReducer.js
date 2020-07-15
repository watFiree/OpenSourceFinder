import * as types from '../actionTypes/tasksActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.GET_TASK_SUCCESS:
      const existingIds = state.data.map((task) => task._id);
      return {
        ...state,
        data: [...state.data, ...action.payload.filter((task) => !existingIds.includes(task._id))],
        loading: false,
        error: null,
      };
    case types.GET_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case types.CREATE_TASK_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_TASK_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null,
      };
    case types.CREATE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default tasksReducer;
