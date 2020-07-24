import * as types from '../actionTypes/applicationActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_APPLICATION_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.GET_APPLICATION_SUCCESS:
      const existingIds = state.data.map((offer) => offer._id);
      return {
        ...state,
        data: [
          ...state.data,
          ...action.payload.filter((offer) => !existingIds.includes(offer._id)),
        ],
        loading: false,
        error: null,
      };
    case types.GET_APPLICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default offersReducer;
