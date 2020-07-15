import * as userTypes from '../actionTypes/userActions';
import * as projectsTypes from '../actionTypes/projectsActions';
import * as tasksTypes from '../actionTypes/tasksActions';
import * as offersTypes from '../actionTypes/offersActions';

const CLEAR_FORMS = 'CLEAR_FORMS';

const initialState = {
  inviteUserForm: {
    processing: false,
    error: null,
  },
  createProjectForm: {
    processing: false,
    error: null,
  },
  createTaskForm: {
    processing: false,
    error: null,
  },
  createOfferForm: {
    processing: false,
    error: null,
  },
};

const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_FORMS:
      return {
        ...initialState,
      };
    case userTypes.INVITE_USER_STARTED:
      return {
        ...state,
        inviteUserForm: {
          ...state.inviteUserForm,
          processing: true,
        },
      };
    case userTypes.INVITE_USER_SUCCESS:
      return {
        ...state,
        inviteUserForm: {
          ...state.inviteUserForm,
          processing: false,
          error: null,
        },
      };
    case userTypes.INVITE_USER_FAILURE:
      return {
        ...state,
        inviteUserForm: {
          ...state.inviteUserForm,
          processing: false,
          error: action.payload.message,
        },
      };
    case projectsTypes.CREATE_PROJECT_STARTED:
      return {
        ...state,
        createProjectForm: {
          ...state.createProjectForm,
          processing: true,
        },
      };
    case projectsTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        createProjectForm: {
          ...state.createProjectForm,
          processing: false,
          error: null,
        },
      };
    case projectsTypes.CREATE_PROJECT_FAILURE:
      return {
        ...state,
        createProjectForm: {
          ...state.createProjectForm,
          processing: false,
          error: action.payload.message,
        },
      };
    case tasksTypes.CREATE_TASK_STARTED:
      return {
        ...state,
        createTaskForm: {
          ...state.createTaskForm,
          processing: true,
        },
      };
    case tasksTypes.CREATE_TASK_SUCCESS:
      return {
        ...state,
        createTaskForm: {
          ...state.createTaskForm,
          processing: false,
          error: null,
        },
      };
    case tasksTypes.CREATE_TASK_FAILURE:
      return {
        ...state,
        createTaskForm: {
          ...state.createTaskForm,
          processing: false,
          error: action.payload.message,
        },
      };
    case offersTypes.CREATE_OFFER_STARTED:
      return {
        ...state,
        createOfferForm: {
          ...state.createOfferForm,
          processing: true,
        },
      };
    case offersTypes.CREATE_OFFER_SUCCESS:
      return {
        ...state,
        createOfferForm: {
          ...state.createOfferForm,
          processing: false,
          error: null,
        },
      };
    case offersTypes.CREATE_OFFER_FAILURE:
      return {
        ...state,
        createOfferForm: {
          ...state.createOfferForm,
          processing: false,
          error: action.payload.message,
        },
      };
    default:
      return state;
  }
};

export default formsReducer;
