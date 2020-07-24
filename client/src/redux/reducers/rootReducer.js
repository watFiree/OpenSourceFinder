import { combineReducers } from 'redux';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';
import formsReducer from './formsReducer';
import offersReducer from './offersReducer';
import applicationsReducer from './applicationsReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer,
  offers: offersReducer,
  applications: applicationsReducer,
  tasks: tasksReducer,
  forms: formsReducer,
});

export default rootReducer;
