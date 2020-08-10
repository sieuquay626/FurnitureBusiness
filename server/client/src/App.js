import React, { useState } from 'react';
import './App.css';

import Header from './components/layout/header';
import Banner from './components/elements/Banner';
import Sidebar from './components/elements/Sidebar';
import './App.css';
import ListProduct from './components/elements/ListProduct';
function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <div className='homepage'>
        <Sidebar />
        <ListProduct />
      </div>
    </div>
  );
}

export default App;
