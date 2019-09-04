import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Login from '@pages/login';
import Home from '@pages/home';

class RouterComponent extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Redirect path="/" to={{ pathname: '/home' }} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default RouterComponent;
