import React, { useState } from 'react';
import './style.scss';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import CartBox from '../../elements/CartBox';
import SearchBox from '../../elements/SearchBox';
import HeaderUserInfor from '../../elements/HeaderUserInfor';
import { handleProduct } from '../../../redux/actions/product';
import { useDispatch, useSelector } from 'react-redux';

const Header = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [state, setState] = useState({
    showCart: false,
  });
  const handleClickCart = () => {
    setState({
      showCart: !state.showCart,
    });
  };

  const handleClickRefresh = () => {
    dispatch(handleProduct());
  };
  return (
    <div className='header'>
      <div className='left-header' onClick={() => handleClickRefresh()}>
        <Link to='/'>
          <img src={logo} alt='No logo' />
        </Link>
      </div>

      <div className='right-header'>
        <div className='input search'>
          <SearchBox />
        </div>
        <div className='right-header-item cart' onClick={handleClickCart}>
          <span>Cart</span>
          <Icon.ShoppingCart />
        </div>
        <CartBox showCart={state.showCart} />

        <div className='right-header-item user '>
          <HeaderUserInfor auth={auth} />
        </div>
      </div>
    </div>
  );
};

export default Header;
