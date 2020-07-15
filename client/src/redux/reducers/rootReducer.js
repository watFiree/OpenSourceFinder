import { combineReducers } from 'redux';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';
import formsReducer from './formsReducer';
import offersReducer from './offersReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer,
  offers: offersReducer,
  tasks: tasksReducer,
  forms: formsReducer,
});

export default rootReducer;
