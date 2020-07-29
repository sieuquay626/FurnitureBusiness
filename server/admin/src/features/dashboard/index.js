import React, { useState, useEffect } from 'react';
import './index.scss';
import Header from '../../components/layouts/header';
import {
  Link,
  Route,
  BrowserRouter as Router,
  useLocation,
} from 'react-router-dom';
import { BankOutlined, ExceptionOutlined } from '@ant-design/icons';
import * as Icon from 'react-feather';
import MenuOptionsDashBoard from '../../components/elements/MenuOptionsDashBoard';
import { map } from 'lodash';
import DashboardRoutes from './routes';

const DashBoard = () => {
  const location = useLocation();

  const [active, setActive] = useState('0');

  const menu = [
    { id: '1', path: '/user', option: 'User' },
    { id: '2', path: '/product', option: 'Product' },
    { id: '3', path: '/profile', option: 'Profile' },
  ];

  useEffect(() => {
    {
      for (let data of menu) {
        if (data.path == location.pathname) {
          setActive(data.id);
          break;
        }
      }
    }
  }, [location]);
  const _clickMenu = (id) => {
    setActive(id);
  };
  return (
    <Router>
      <div className='dashboardWrapper'>
        <Header />
        <div className='dashborad'>
          <div className='row content-dashboard'>
            <div className='col-1 menu-dashborad'>
              {map(menu, (item, index) => {
                return (
                  <MenuOptionsDashBoard
                    key={index}
                    {...item}
                    active={active}
                    handleClick={_clickMenu}
                  />
                );
              })}
            </div>
            <div className='col-11 content-right wrapper-setting'>
              <DashboardRoutes />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default DashBoard;
