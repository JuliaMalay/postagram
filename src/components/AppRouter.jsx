import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {routes} from '../router';

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          component={route.component}
          exact={route.exact}
          path={route.path}
        />
      ))}
      <Redirect to="/error" />
    </Switch>
  );
};

export default AppRouter;
