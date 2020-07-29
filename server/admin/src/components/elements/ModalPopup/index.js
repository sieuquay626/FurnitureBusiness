import React, { useState } from 'react';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import ModalCreateUser from '../../../features/user/ModalCreateUser';
import ModalEditUser from '../../../features/user/ModalEditUser';
import { get } from 'lodash';
import { handleClosePopup } from '../../../redux/actions/user';

const ModalPopup = () => {
  const state = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  function setBodyModal() {
    switch (state.types) {
      case 'create_user':
        return <ModalCreateUser />;
      case 'edit_user':
        return <ModalEditUser />;
      default:
        break;
    }
  }

  let title = state.types.toUpperCase().split('_').join(' ');

  return (
    <div className={`modal-popup ${state.check ? 'show' : ''}`}>
      <div className='header-popup-1'>
        <div className='header-popup-2'>{title}</div>
      </div>

      <form className='body-form'>
        {setBodyModal()}
        <ul className='gr_btn_submit'>
          <li>
            <button type='submit' className='btn btn-default'>
              save change
            </button>
          </li>
          <li>
            <button type='button' className='btn btn-link'>
              Reset
            </button>
          </li>
          <li>
            <button
              type='button'
              className='btn btn-default'
              onClick={() => dispatch(handleClosePopup())}
            >
              Close
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ModalPopup;
