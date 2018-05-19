import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '../Redux/ConfigureStore';

import AppLayout from '../Containers/Layout';
import Home from '../Containers/Home';
import Search from '../Containers/Search';

class AppRouter extends Component {
  render() {
    return (
      <ConnectedRouter history={ history }>
        <AppLayout>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/search' component={ Search } />
            <Redirect to='/' />
          </Switch>
        </AppLayout>
      </ConnectedRouter>
    );
  }
}

export default AppRouter;
