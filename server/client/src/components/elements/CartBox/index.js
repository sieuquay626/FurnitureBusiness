import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import './style.scss';

const CartBox = (props) => {
  const [subTotal, setSubTotal] = useState(0);
  const [state, setState] = useState({
    shoppingCart: [
      {
        id: 1,
        title: 'Voxel Armchair',
        color: 'black',
        size: '300ML',
        price: '299',
        img:
          'https://hausimg.imgix.net/s/files/1/0053/2792/products/351_Hepburn_Bed_by_Matthew_Hilton_in_black_oiled_ash_and_Sunniva_2_132_fabric_with_351T_Hepburn_Side_Table-front.jpg?v=1571262528&auto=format&w=1280&',
        amount: '3',
      },
      {
        id: 2,
        title: 'Voxel Armchair',
        color: 'black',
        size: '300ML',
        price: '199',
        img:
          'https://hausimg.imgix.net/s/files/1/0053/2792/products/frit-black-20534.jpg?v=1589010322&auto=format&w=1280&',
        amount: '3',
      },
      {
        id: 3,
        title: 'Voxel Armchair',
        color: 'black',
        size: '300ML',
        price: '99',
        img:
          'https://cdn.shopify.com/s/files/1/0053/2792/products/Essence_redwine_2a.hs_0f1dea32-fe39-4fba-9a01-02fb4f099e0d.jpeg',
        amount: '3',
      },
      {
        id: 4,
        title: 'Voxel Armchair',
        color: 'black',
        size: '300ML',
        price: '279',
        img:
          'https://hausimg.imgix.net/s/files/1/0053/2792/products/Norm.hs.jpg?v=1571262681&auto=format&w=1280&',
        amount: '3',
      },
      {
        id: 5,
        title: 'Voxel Armchair',
        color: 'black',
        size: '300ML',
        price: '111',
        img:
          'https://hausimg.imgix.net/s/files/1/0053/2792/products/Silhouette_Sofa_Low_uph_Coda_100_black_leather_WB_1.jpg?v=1571750473&auto=format&w=1280&',
        amount: '3',
      },
      {
        id: 6,
        title: 'Voxel Armchair',
        color: 'black',
        size: '300ML',
        price: '579',
        img:
          'https://hausimg.imgix.net/s/files/1/0053/2792/products/931462_Silhouette_Sofa_Low_3_Seater_duo_back_Steelcut_195_cushions_Lola_navy_oiled_oak_legs_1024x1024.jpg?v=1571750472&auto=format&w=430&',
        amount: '3',
      },
    ],
  });

  useEffect(() => {
    let temp = 0;
    for (let item of state.shoppingCart) {
      temp += Number(item.price) * Number(item.amount);
    }
    setSubTotal(temp);
  }, [state]);

  const handlePlusAmount = (id) => {
    let temp = { ...state };
    temp.shoppingCart[id].amount = String(
      Number(temp.shoppingCart[id].amount) + 1
    );
    setState({
      ...temp,
    });
  };
  const handleMinusAmount = (id) => {
    let temp = { ...state };
    if (temp.shoppingCart[id].amount > 1) {
      temp.shoppingCart[id].amount = String(
        Number(temp.shoppingCart[id].amount) - 1
      );
      setState({
        ...temp,
      });
    }
  };
  const handleDeleteCartItem = (id) => {
    let temp = { ...state };
    temp.shoppingCart = [
      ...temp.shoppingCart.splice(0, id),
      ...temp.shoppingCart.splice(id + 1, temp.shoppingCart.length),
    ];
    console.log(temp);
    setState({
      ...temp,
    });
  };
  return (
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
        <Link to='checkout' className='act btn-checkout'>
          <span>Checkout</span>
        </Link>
      </div>
    </div>
  );
};

export default CartBox;
