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
  switch (action.type) {
    case 'LOGED_IN':
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default userReducer;
