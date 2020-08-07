import React, { useState } from 'react';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import ModalCreateUser from '../../../features/user/ModalCreateUser';
import ModalEditUser from '../../../features/user/ModalEditUser';
import { get } from 'lodash';
import { handleClosePopup } from '../../../redux/actions/user';
import * as Icon from 'react-feather';

const ModalPopup = () => {
  const state = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  function setBodyModal() {
    switch (state.types) {
      case 'create_user':
        return <ModalCreateUser />;
      case 'edit_user':
        console.log('vao');
        return <ModalEditUser />;
      default:
        break;
    }
  }

  let title = state.types.toUpperCase().split('_').join(' ');

  return (
    <div className={`modal-popup ${state.check ? 'show' : ''}`}>
      <div className='header-popup'>{title}</div>
      <Icon.X
        className='btn-close'
        onClick={() => dispatch(handleClosePopup())}
      />
      <form className='body-form'>{setBodyModal()}</form>
    </div>
  );
};

export default ModalPopup;
