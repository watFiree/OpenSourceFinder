import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withProviders from '../hoc/withProviders';
import MainView from './MainView';
import ProjectsView from './ProjectsView';
import UserProjectsView from './UserProjectsView';
import LoggingView from './LoggingView';
import ProjectView from './ProjectView';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route exact path="/user/projects" component={UserProjectsView} />
        <Route exact path="/projects" component={ProjectsView} />
        <Route exact path="/project/:slug" component={ProjectView} />
        <Route exact path={['/signin', '/signup']} component={LoggingView} />
      </Switch>
    </Router>
  );
};

export default withProviders(Root);
