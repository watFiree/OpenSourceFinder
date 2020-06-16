import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withProviders from '../hoc/withProviders';
import MainView from './MainView';
import ProjectsView from './ProjectsView';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route exact path="/projects" component={ProjectsView} />
      </Switch>
    </Router>
  );
};

export default withProviders(Root);
