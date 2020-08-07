import React, { useState } from 'react';
import './style.scss';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import CartBox from '../../elements/CartBox';
import SearchBox from '../../elements/SearchBox';

const Header = (props) => {
  const [state, setState] = useState({
    showCart: false,
  });
  const handleClickCart = () => {
    setState({
      showCart: !state.showCart,
    });
  };
  return (
    <div className='header'>
      <div className='left-header'>
        <Link to='/'>
          <img src={logo} alt='No logo' />
        </Link>
      </div>

      <div className='input search'>
        <SearchBox />
      </div>

      <div className='right-header'>
        <div className='right-header-item cart' onClick={handleClickCart}>
          <Icon.ShoppingCart />
        </div>

        <CartBox showCart={state.showCart} />
        <div className='right-header-item signup'>Sign Up</div>
        <div className='right-header-item'>
          <div className='login'>
            <Icon.LogIn />
            <p>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
