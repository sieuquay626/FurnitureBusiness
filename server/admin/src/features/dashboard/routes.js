import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import Loader from '../../../components/elements/loader/loader';

const routesSuper = [
  {
    path: '/user',
    exact: true,
    component: lazy(() => import('../user/listUser')),
  },
];

const routes = [
  {
    path: '/product',
    exact: true,
    component: lazy(() => import('../product/listProduct')),
  },
];

const AppRouter = () => {
  const role = useSelector((state) => state.auth.userInfo.role);
  return (
    <Switch>
      {routes.map((route, idx) => {
        return (
          <Route
            key={idx}
            component={route.component}
            exact={route.exact}
            path={route.path}
          />
        );
      })}

      {role === 'SuperAdmin'
        ? routesSuper.map((route, idx) => {
            return (
              <Route
                key={idx}
                component={route.component}
                exact={route.exact}
                path={route.path}
              />
            );
          })
        : null}
    </Switch>
  );
};

export default AppRouter;
