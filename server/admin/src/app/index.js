import React, { Suspense, lazy } from 'react';
import { useSelector, Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  useLocation,
  Route,
  Redirect,
} from 'react-router-dom';
import './style.scss';
import '../assets/styles/index.scss';
import Navigation from '../navigation';
import Loader from '../components/elements/loader/loader';
import { store } from '../redux/store';
import ModalPopup from '../components/elements/ModalPopup';

const Dashboard = lazy(() => import('../features/dashboard'));

const publicRoutes = [
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('../features/login')),
  },
  {
    path: '/recover-password',
    exact: true,
    component: lazy(() => import('../features/recoverpassword')),
  },
  {
    path: '/reset-password/:tokenReset',
    exact: true,
    component: lazy(() => import('../features/resetpassword')),
  },
];

function PrivateRoute({ children, ...rest }) {
  let location = useLocation();
  const { isLogin } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={Navigation.history}>
        <Suspense fallback={<Loader />}>
          <Switch>
            {publicRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })}

            <PrivateRoute path='/'>
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Suspense>
        <ModalPopup />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
