import React from 'react';
import * as Icon from 'react-feather';
import './style.scss';
const SearchBox = () => {
  return (
    <div className='search-box'>
      <input
        className='input-box'
        placeholder='Search here'
        name='searchB'
      />
      <Icon.Search />
    </div>
  );
};

export default SearchBox;
