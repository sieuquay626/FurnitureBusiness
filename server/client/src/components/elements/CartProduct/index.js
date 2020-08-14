import React, { useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import * as Icon from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import { Rating } from '@material-ui/lab';
import { handleAddCart } from '../../../redux/actions/cart';

const CartProduct = (props) => {
  const { item } = props;
  const [value, setValue] = useState(4);
  const dispatch = useDispatch();

  const AddToCart = (item) => {
    console.log('ok');
    dispatch(handleAddCart(item));
  };
  return (
    <Link to={`/collect/${item._id}`}>
      <li className='card-product'>
        <div className='image-product'>
          <div className='image-cover'>
            <div className='list-action'></div>
          </div>
          <div className='image-infor new'>
            <span>New</span>
          </div>
          <div
            className={`image-infor discount ${item.discount ? 'show' : ''} `}
          >
            <span>{item.discount}%</span>
          </div>
          <img src={item.coverImage} alt='no image' />
          <div className='addToCart' onClick={() => AddToCart(item)}>
            <Icon.ShoppingCart />
            <span>Add To Cart</span>
          </div>
        </div>
        <div className='infor-product'>
          <div className='category'>
            <div className='title-category'>
              {item.categories.map((cate, index) => {
                return (
                  <span key={index}>
                    {cate.title}
                    {index == item.categories.length - 1 ? '' : ','}
                  </span>
                );
              })}
            </div>
            <div className='star'>
              <Rating value={4} />
            </div>
          </div>
          <div className='title-product'>{item.title}</div>
          <div className='product-price'>
            <div className='discounted-price'>
              ${(item.price * (100 - item.discount) * 0.01).toFixed(2)}
            </div>
            <div className={`main-price ${item.discount ? 'show' : ''}`}>
              ${item.price}
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default CartProduct;
