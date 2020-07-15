import * as types from '../actionTypes/projectsActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case types.GET_PROJECT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PROJECT_SUCCESS:
      const existingIds = state.data.map((project) => project._id);
      return {
        ...state,
        data: [
          ...state.data,
          ...action.payload.filter((project) => !existingIds.includes(project._id)),
        ],
        error: null,
        loading: false,
      };
    case types.GET_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.CREATE_PROJECT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null,
      };
    case types.CREATE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default userReducer;
