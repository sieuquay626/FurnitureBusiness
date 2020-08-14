import React from 'react';
import './style.scss';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
const HeaderUserInfor = ({ auth }) => { 
  return auth ? (
    <div className='user-infor'>
      <h1>sadnsadnsad</h1>
    </div>
  ) : (
    <div className='user-infor'>
      <Link to='/signup' className='btn-infor signup'>
        Sign Up
      </Link>
      <Link to='/login' className='btn-infor login'>
        <Icon.LogIn />
        <p>Login</p>
      </Link>
    </div>
  );
};

export default HeaderUserInfor;
/*



*/
