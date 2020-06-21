import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withProviders from '../hoc/withProviders';
import MainView from './MainView';
import ProjectsView from './ProjectsView';
import OffersView from './OffersView';
import LoggingView from './LoggingView';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route exact path="/offers" component={OffersView} />
        <Route exact path="/projects" component={ProjectsView} />
        <Route exact path={['/signin', '/signup']} component={LoggingView} />
      </Switch>
    </Router>
  );
};

export default withProviders(Root);
