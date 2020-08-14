import React, { useState, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Navigation from '../navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/layout/header';
import Banner from '../components/elements/Banner';
import Loading from '../components/elements/Loading';
import Dotenv from 'dotenv';

const HomePage = lazy(() => import('../components/features/HomePage'));
const NotFound = lazy(() => import('../components/features/NotFound'));
const ProductDetail = lazy(() => import('../components/features/HomePage'));
const LoginPage = lazy(() => import('../components/features/LoginPage'));
const CheckoutPage = lazy(() => import('../components/features/Checkout'));

Dotenv.config();

// function PrivateRoute ({component: Component, requireLogin, isLoggedIn, ...props}) {
//   return (
//     return !isLoggedIn && requireLogin ?
//     <Redirect to={Path.login} />
//     :
//     <Route component={withLayout(Component, isLoggedIn)} {...props} />
//     />
//   )
// }

/*

<PrivateRoute exact requireLogin path={Path.profile} component={Profile} />
*/

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={Navigation.history}>
        <Suspense fallback={Loading}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/collect/:id' exact component={ProductDetail} />
            <Route path='/collect/:id' exact component={ProductDetail} />
            <Route path='/checkout' exact component={CheckoutPage} />
            <Route path='/login' exact component={LoginPage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
