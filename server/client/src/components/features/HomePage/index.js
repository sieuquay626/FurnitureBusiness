import React, { useEffect } from 'react';
import './style.scss';
import Sidebar from '../../elements/Sidebar';
import Header from '../../layout/header';
import Banner from '../../elements/Banner';
import { useDispatch } from 'react-redux';
import { handleProduct } from '../../../redux/actions/product';
import { handleGetCart } from '../../../redux/actions/cart';
import ContentProduct from '../../elements/ContentProduct';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetCart());
  }, []);
  return (
    <div className='homepage'>
      <Header />
      <Banner />
      <div className='homepage-body'>
        <Sidebar />
        <ContentProduct />
      </div>
      <footer>All right is reverser</footer>
    </div>
  );
};

export default HomePage;
