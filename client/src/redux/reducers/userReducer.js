import * as types from '../actionTypes/userActions';

const initialState = {
  name: '',
  email: '',
  isAuth: false,
  avaible: 0,
  projectsIds: [],
  token: '',
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.USER_LOGOUT:
      document.cookie = 'token=';
      return {
        ...initialState,
      };
    case types.SIGN_USER_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.SIGN_USER_SUCCESS:
      const { _id, name, email, avaible, projects } = action.payload;
      return {
        ...state,
        _id,
        name,
        email,
        avaible,
        projects,
        loading: false,
        isAuth: true,
        error: null,
      };
    case types.SIGN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        isAuth: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
