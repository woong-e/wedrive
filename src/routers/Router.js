import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {appRootPath} from '../settings';
import LayoutContainer from '../containers/common/Layout/LayoutContainer';

const RestrictedRoute = ({component: Component, token, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      <Component {...props} />
    }
  />

);
const PublicRoutes = ({history}) => {
  //
  return (
    <BrowserRouter history={history}>
      <Switch>
        <RestrictedRoute path={`${appRootPath}`} component={LayoutContainer}/>
      </Switch>
    </BrowserRouter>
  );
};

export default PublicRoutes;
