import React from 'react';
import { Card } from '@material-ui/core';
import './style.scss';
import CartProduct from '../CartProduct';
const ListProduct = ({ products, title }) => {
  return (
    <div className='all-product'>
      <h1 className='title-product'>{title}</h1>
      <div className='products'>
        {products.map((product, index) => {
          let temp = { ...product };
          temp.coverImage = `http://localhost:5000/${temp.coverImage}`;
          return <CartProduct item={temp} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ListProduct;

/*
let temp = { ...product };
          console.log('temp', temp);
          temp.coverImage = `http://localhost:5000/${temp.coverImage}`;


*/
