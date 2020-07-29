import React, { useState } from 'react';
import BtnMenu from '../btnMenu';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';

const MenuMobile = (props) => {
  const state = useSelector((state) => state.auth.userInfo);
  const [menu, setMenu] = useState({
    show: false,
    display: 'none',
  });

  const addClass = () => {
    setMenu({
      show: true,
      display: 'block',
    });
  };

  const removeClass = () => {
    setMenu({
      show: false,
      display: 'none',
    });
  };
  const handleClick = () => {
    toggleMenu();
  };

  const renderBtnMenu = () => {
    return (
      <Link
        to='#'
        onClick={() => {
          handleClick();
        }}
      >
        <BtnMenu ref='btn' />
      </Link>
    );
  };

  const toggleMenu = () => {
    if (menu.display === 'none') {
      addClass();
      if (this.refs.btn) this.refs.btn.handleClick();
    } else {
      removeClass();
      if (this.refs.btn) this.refs.btn.handleClick();
    }
  };

  const renderContentMobile = () => {
    return (
      <div className={menu.show ? 'list-menu active-menu' : 'list-menu'}>
        <Link
          to='#'
          onClick={() => {
            toggleMenu();
          }}
        >
          <Icon.X className=' img-close' />
        </Link>
        <ul className='info-menu-mobile'>
          <li className='user-avatar-box'>
            <div className='user-avatar'>
              <img src={state.avatar} className='img-avatar' alt='icon-user' />
            </div>
            <div className='user-info-box'>
              <div className='user-name'>{state.username}</div>
            </div>
          </li>
        </ul>
        <div className='logout'>
          <Link
            to='#'
            onClick={() => this.props.dispatchShowPopup('popuplogout')}
          >
            Log out
          </Link>
        </div>
      </div>
    );
  };

  return <h1>MenuMobile</h1>;
};

export default MenuMobile;
