import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleAddCart,
  handleMinusCart,
  handleDeleteCart,
} from '../../../redux/actions/cart';
import { IMAGES } from '../../../assets';

const CartBox = ({ showCart }) => {
  const [subTotal, setSubTotal] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // useEffect(() => {
  //   let temp = 0;
  //   for (let item of state.shoppingCart) {
  //     temp += Number(item.price) * Number(item.amount);
  //   }
  //   setSubTotal(temp);
  // }, [state]);

  const handlePlusAmount = (data) => {
    dispatch(handleAddCart(data));
  };
  const handleMinusAmount = (data) => {
    if (data.amount > 1) {
      dispatch(handleMinusCart(data.product));
    }
  };
  const handleDeleteCartItem = (data) => {
    dispatch(handleDeleteCart(data));
  };

  const BodyCartBox = ({ data }) => {
    return data.length ? (
      data.map((item, index) => {
        return (
          <div className='item-cart' key={index}>
            <div className='view-img'>
              <img src={item.product.coverImage} alt='no item' />
            </div>
            <div className='infor-item'>
              <div className='item-name'>{item.product.title}</div>
              <div className='item-price'>
                $
                {(
                  item.product.price *
                  (100 - item.product.discount) *
                  0.01
                ).toFixed(2)}
              </div>
              <div className='item-amount'>
                <div
                  className={`amount ${item.amount == 1 ? 'hidden' : ''}`}
                  onClick={() => handleMinusAmount(item)}
                >
                  <Icon.Minus />
                </div>
                <div className='amount val'>{item.amount}</div>
                <div
                  className='amount'
                  onClick={() => handlePlusAmount(item.product)}
                >
                  <Icon.Plus />
                </div>
              </div>
            </div>
            <div className='trash'>
              <Icon.Trash2 onClick={() => handleDeleteCartItem(item.product)} />
            </div>
          </div>
        );
      })
    ) : (
      <div className='img_no_item'>
        <img src={IMAGES.no_item_in_cart} alt='No Item' />
      </div>
    );
  };

  return showCart ? (
    <div className={`cart-box ${showCart ? 'show' : ''}`}>
      <div className='header-cart'>
        <h4>Shopping Cart</h4>
      </div>
      <div className='list-cart'>
        <BodyCartBox data={cart.listToCartProduct} />
      </div>
      <div className='sub-total'>
        <span className='total-title'>SubTotal:</span>
        <span className='total-price'>${subTotal}</span>
      </div>

      <div className='header-cart-checkout'>
        <Link to='cart' className='act btn-viewbag'>
          <span>View Bag</span>
        </Link>
        <Link to='/checkout' className='act btn-checkout'>
          <span>Checkout</span>
        </Link>
      </div>
    </div>
  ) : null;
};

export default CartBox;

/*

 <div className={`cart-box ${props.showCart ? 'show' : ''}`}>
      <div className='header-cart'>
        <h4>Shopping Cart</h4>
      </div>
      <div className='list-cart'>
        {state.shoppingCart.map((item, index) => {
          return (
            <div className='item-cart' key={index}>
              <div className='view-img'>
                <img src={item.img} alt='no item' />
              </div>
              <div className='infor-item'>
                <div className='item-name'>{item.title}</div>
                <div className='variations'>
                  <span className='item-color'>{item.color}</span>
                  <span className='item-size'>,{item.size}</span>
                </div>
                <div className='item-price'>${item.price}</div>
                <div className='item-amount'>
                  <div
                    className={`amount ${
                      state.shoppingCart[index].amount == 1 ? 'hidden' : ''
                    }`}
                    onClick={() => handleMinusAmount(index)}
                  >
                    <Icon.Minus />
                  </div>
                  <div className='amount val'>{item.amount}</div>
                  <div
                    className='amount'
                    onClick={() => handlePlusAmount(index)}
                  >
                    <Icon.Plus />
                  </div>
                </div>
              </div>
              <div className='trash'>
                <Icon.Trash2 onClick={() => handleDeleteCartItem(index)} />
              </div>
            </div>
          );
        })}
      </div>
      <div className='sub-total'>
        <span className='total-title'>SubTotal:</span>
        <span className='total-price'>${subTotal}</span>
      </div>

      <div className='header-cart-checkout'>
        <Link to='cart' className='act btn-viewbag'>
          <span>View Bag</span>
        </Link>
        <Link to='/checkout' className='act btn-checkout'>
          <span>Checkout</span>
        </Link>
      </div>
    </div>

*/
