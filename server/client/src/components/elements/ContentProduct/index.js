import React, { useEffect, useState } from 'react';
import './style.scss';
import ProductRecomment from '../ProductRecomment';
import { useDispatch, useSelector } from 'react-redux';
import { handleProduct } from '../../../redux/actions/product';
import ListProduct from '../ListProduct';

const ContentProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    switch (products.currentMovieType) {
      case 'New Arrival':
        setListItem([...products.listProduct]);
        break;
      default:
        setListItem([...products.productByCategory]);
        break;
    }
  }, [products.currentMovieType]);
  return (
    <div className='content-product'>
      <ProductRecomment />
      <ListProduct products={listItem} title={products.currentMovieType} />
    </div>
  );
};
/*

*/
export default ContentProduct;
