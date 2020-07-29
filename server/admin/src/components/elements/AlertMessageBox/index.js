import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import NotificationBox from '../NotificationBox';
const AlertMessageBox = (notificationProps) => {
  return (
    <div className='alert-message-box'>
      <div className='alert-notification'>
        <h4>{_.size(notificationProps.LIST_NOTIFICATION)} new</h4>
        <p>App notifications</p>
      </div>
      <div className='list-message'>
        {_.map(notificationProps.LIST_NOTIFICATION, (item, index) => {
          return <NotificationBox {...item} key={index} />;
        })}
      </div>
      <Link to={'/notification'}>
        <div className='alert-all'>
          <p>Read all notification</p>
        </div>
      </Link>
    </div>
  );
};

AlertMessageBox.propTypes = {
  notificationProps: PropTypes.arrayOf(PropTypes.shape()),
};

AlertMessageBox.defaultProps = {
  type: '',
  icon: '',
  title: '',
  content: '',
  time: '',
};

export default AlertMessageBox;
