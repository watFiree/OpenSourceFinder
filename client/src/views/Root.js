import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withProviders from '../hoc/withProviders';
import MainView from './MainView';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainView} />
      </Switch>
    </Router>
  );
};

export default withProviders(Root);
