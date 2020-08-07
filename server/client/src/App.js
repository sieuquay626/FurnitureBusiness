import React, { useState } from 'react';
import './App.css';

import Header from './components/layout/header';
import Banner from './components/elements/Banner';
function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
    </div>
  );
}

export default App;
