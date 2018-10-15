import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Header } from './common/components/Header';

import AppRouteHandler from './views/app';

module.exports = (
  <div className="container">
    <Header />
    <div className="container__content">
      <Switch>
        <Route exact path="/" component={AppRouteHandler} />
      </Switch>
    </div>
  </div>
);
