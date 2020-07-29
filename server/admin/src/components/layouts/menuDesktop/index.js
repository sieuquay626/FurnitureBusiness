import React, { useState } from 'react';
import CustomLink from '../../elements/CustomLink';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../../assets';
import * as Icon from 'react-feather';

import { LIST_NOTIFICATION } from '../../../constant/config';
import { useSelector } from 'react-redux';
import AlertMessageBox from '../../elements/AlertMessageBox';

import _ from 'lodash';

import { handleLogout } from '../../../redux/actions/login';
import './style.scss';

const MenuDesktop = (props) => {
  const state = useSelector((state) => state.auth.userInfo);

  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light menu'>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item' style={{ paddingRight: '0.3rem' }}>
            <CustomLink
              to='/'
              label='Home'
              className='link-menu'
              icon={<Icon.Home />}
            />
          </li>
        </ul>
        <ul className='navbar-nav my-2 my-lg-0 menu-right'>
          <li className='nav-item'>
            <img
              src={IMAGES.icons_mail}
              className='img-responsive'
              alt='icons_mail'
            />
            <div className='nav-item-right'>
              <span style={{ fontWeight: '600' }}>Email</span>
              <span>tanphat261098@gmail.com</span>
            </div>
          </li>

          <li className='nav-item'>
            <img
              src={IMAGES.icons_phone}
              className='img-responsive'
              alt='icons_mail'
            />
            <div className='nav-item-right'>
              <span style={{ fontWeight: '600' }}>Hotline</span>
              <span>+84-33-486-2484</span>
            </div>
          </li>

          <li className='nav-item nav-bell'>
            <div className='bell-box'>
              <i className='fa fa-bell-o' aria-hidden='true'>
                <div className='bell-size'>{_.size(LIST_NOTIFICATION)}</div>
              </i>
            </div>
            <AlertMessageBox LIST_NOTIFICATION={LIST_NOTIFICATION} />
          </li>

          <li className='nav-item '>
            <div className='user-info-box'>
              <div className='user-name'>{state.username}</div>
            </div>
            <div className='user-avatar-box'>
              <div className='user-avatar'>
                <img
                  src={state.avatar}
                  className='img-avatar'
                  alt='icon-user'
                />
                <ul className='list-user-item'>
                  <Link to='/account-setting'>
                    <li className='user-item'>
                      <Icon.Settings style={{ marginTop: '2px' }} />
                      <div className='item item-profile'>Account Setting</div>
                    </li>
                  </Link>
                  <li className='user-item' onClick={() => handleLogout()}>
                    <Icon.LogOut style={{ marginTop: '2px' }} />
                    <div className='item item-logout'>Sign out</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuDesktop;
