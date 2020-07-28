import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withProviders from '../hoc/withProviders';
import MainView from './MainView';
import ProjectsView from './ProjectsView';
import UsersProjectsView from './UsersProjectsView';
import LoggingView from './LoggingView';
import OfferView from './OfferView';
import MembersProjectView from './ProjectView/MainView';
import MyAccountView from './MyAccountView';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route exact path="/projects" component={ProjectsView} />
        <Route exact path="/offer/:id" component={OfferView} />
        <Route exact path="/user" component={MyAccountView} />
        <Route exact path="/user/projects" component={UsersProjectsView} />
        <Route exact path="/user/project/:id" component={MembersProjectView} />
        <Route exact path={['/signin', '/signup']} component={LoggingView} />
      </Switch>
    </Router>
  );
};

export default withProviders(Root);
