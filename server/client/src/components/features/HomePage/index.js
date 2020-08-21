import React, { useEffect } from 'react';
import './style.scss';
import Sidebar from '../../elements/Sidebar';
import Header from '../../layout/header';
import Banner from '../../elements/Banner';
import { useDispatch } from 'react-redux';
import { handleProduct } from '../../../redux/actions/product';
import { handleGetCart } from '../../../redux/actions/cart';
import ContentProduct from '../../elements/ContentProduct';
import Footer from '../../layout/footer';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetCart());
    dispatch(handleProduct());
  });
  return (
    <div className='homepage'>
      <Header />
      <Banner />
      <div className='homepage-body'>
        <Sidebar />
        <ContentProduct />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
