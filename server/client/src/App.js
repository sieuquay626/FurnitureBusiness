import React, { useState } from 'react';
import './App.css';

import Header from './components/layout/header';
import Banner from './components/elements/Banner';
import Sidebar from './components/elements/Sidebar';
import './App.css';
import ListProduct from './components/elements/ListProduct';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navigation from './navigation';
import { Router } from 'react-router';
function App() {
  return (
    <Provider store={store}>
      <Router history={Navigation.history}>
        <div className='App'>
          <Header />
          <Banner />
          <div className='homepage'>
            <Sidebar />
            <ListProduct />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
