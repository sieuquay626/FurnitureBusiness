import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';
const NotificationBox = (props) => {
  const { type, icon, title, content, time } = props;
  const data = {
    title,
    description: content,
  };
  return (
    <Link
      to={'#'}
      className={`notification-box ${type}`}
      // onClick={() => this._onOpen(data)}
    >
      <div className='no-box-icon'>
        <i className={`${icon}`} aria-hidden='true'></i>
      </div>
      <div className='no-box-content'>
        <p className='box-title'>{title}</p>
        <p className='box-content'>{content}</p>
      </div>
      <div className='no-box-time'>
        <p className='box-time'>{time}</p>
      </div>
    </Link>
  );
};

export default NotificationBox;
