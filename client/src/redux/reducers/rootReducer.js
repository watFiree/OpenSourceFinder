import { combineReducers } from 'redux';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';
import formsReducer from './formsReducer';
import offersReducer from './offersReducer';
import applicationsReducer from './applicationsReducer';
import tasksReducer from './tasksReducer';
import chatsReducer from './chatsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer,
  offers: offersReducer,
  applications: applicationsReducer,
  tasks: tasksReducer,
  chats: chatsReducer,
  forms: formsReducer,
});

export default rootReducer;
