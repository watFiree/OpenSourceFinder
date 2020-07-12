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
      return {
        ...state,
        data: [
          ...action.payload.filter(
            (item) => !state.data.forEach((project) => project._id === item._id)
          ),
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
    default:
      return state;
  }
};

export default userReducer;
