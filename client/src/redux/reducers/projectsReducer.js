import * as types from '../actionTypes/projectsActions';
import * as offersTypes from '../actionTypes/offersActions';
import * as tasksTypes from '../actionTypes/tasksActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
  fetching: 0,
  deleted: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROJECT_STARTED:
      return {
        ...state,
        loading: true,
        fetching: state.fetching + 1,
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
        fetching: state.fetching - 1,
      };
    case types.GET_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        fetching: state.fetching - 1,
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
    case types.REMOVE_PROJECT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.REMOVE_PROJECT_SUCCESS:
      return {
        ...state,
        data: [...state.data.filter((project) => project._id !== action.payload.projectId)],
        // TODO remove project in tasks, offers, applications , and remove user
        loading: false,
        error: null,
        deleted: action.payload.projectId,
      };
    case types.REMOVE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case offersTypes.CREATE_OFFER_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data.map((project) =>
            project._id === action.payload.project._id
              ? { ...project, offers: [...project.offers, action.payload._id] }
              : project
          ),
        ],
      };
    case offersTypes.REMOVE_OFFER_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data.map((project) =>
            project._id === action.payload.projectId
              ? {
                  ...project,
                  offers: [...project.offers.filter((id) => id !== action.payload.offerId)],
                }
              : project
          ),
        ],
      };
    case tasksTypes.REMOVE_TASK_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data.map((project) =>
            project._id === action.payload.projectId
              ? {
                  ...project,
                  tasks: [...project.tasks.filter((id) => id !== action.payload.taskId)],
                }
              : project
          ),
        ],
      };
    default:
      return state;
  }
};

export default userReducer;
