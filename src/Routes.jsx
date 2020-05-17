import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from 'screens/Dashboard'
import { isLoggedIn } from 'utils/helperFunction'
import StudentSignup from './screens/SignupSign/StudentSignup'
import Home from './screens/LandingPage/Home'
import Pricing from './screens/LandingPage/Pricing'
import Features from './screens/LandingPage/Features'
import Contact from './screens/LandingPage/Contact'
import Support from './screens/LandingPage/Support'
import Team from './screens/LandingPage/Team'
import TutorSignup from './screens/SignupSign/TutorSignup'
import SignIn from './screens/SignupSign/SignIn'
import PageNotFound from './components/PageNotFound'

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
  )
}
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

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
  )
}

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.instanceOf(Component),
    PropTypes.func,
  ]).isRequired,
  restricted: PropTypes.bool.isRequired,
}

export const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} component={Home} path="/" exact />
        <PublicRoute
          restricted={false}
          component={Pricing}
          path="/pricing"
          exact
        />
        <PublicRoute
          restricted={false}
          component={StudentSignup}
          path="/student-signup"
          exact
        />
        <PublicRoute
          restricted={false}
          component={Features}
          path="/features"
          exact
        />
        <PublicRoute
          restricted={false}
          component={Contact}
          path="/contact"
          exact
        />
        <PublicRoute
          restricted={false}
          component={Support}
          path="/support"
          exact
        />
        <PublicRoute restricted={false} component={Team} path="/team" exact />
        <PublicRoute restricted component={SignIn} path="/signin" exact />
        <PublicRoute
          restricted
          component={TutorSignup}
          path="/tutor-signup"
          exact
        />
        <PublicRoute
          restricted
          component={TutorSignup}
          path="/student-signup"
          exact
        />
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
