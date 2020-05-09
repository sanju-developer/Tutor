import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from 'screens/Dashboard';
import LandingPage from 'screens/LandingPage';
import SignIn from 'screens/LandingPage/SignIn';
import { isLoggedIn } from 'utils/helperFunction';
import Signup from './screens/LandingPage/Signup';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props =>
        isLoggedIn() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  restricted: PropTypes.bool.isRequired,
};

export const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          restricted={false}
          component={LandingPage}
          path="/"
          exact
        />
        <PublicRoute restricted component={SignIn} path="/signin" exact />
        <PublicRoute restricted component={Signup} path="/signup" exact />
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
      </Switch>
    </BrowserRouter>
  );
};
