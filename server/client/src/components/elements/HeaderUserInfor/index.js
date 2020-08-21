import React from 'react';
import './style.scss';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
const HeaderUserInfor = ({ auth }) => {
  return auth.isOAuth ? (
    <div className='user-infor'>
      <div className='username'>{auth.userInfo.username}</div>
      <img className='avatar' src={auth.userInfo.avatar} alt='No avartar' />
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
