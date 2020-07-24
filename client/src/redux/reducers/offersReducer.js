import * as types from '../actionTypes/offersActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
  fetching: 0,
  deleted: null,
};

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_OFFER_STARTED:
      return {
        ...state,
        loading: true,
        fetching: state.fetching + 1,
      };
    case types.GET_OFFER_SUCCESS:
      const existingIds = state.data.map((offer) => offer._id);
      return {
        ...state,
        data: [
          ...state.data,
          ...action.payload.filter((offer) => !existingIds.includes(offer._id)),
        ],
        loading: false,
        error: null,
        fetching: state.fetching - 1,
      };
    case types.GET_OFFER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        fetching: state.fetching - 1,
      };
    case types.CREATE_OFFER_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_OFFER_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null,
      };
    case types.CREATE_OFFER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case types.REMOVE_OFFER_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.REMOVE_OFFER_SUCCESS:
      return {
        ...state,
        data: [...state.data.filter((offer) => offer._id !== action.payload.offerId)],
        loading: false,
        error: null,
        deleted: action.payload.offerId,
      };
    case types.REMOVE_OFFER_FAILURE:
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
