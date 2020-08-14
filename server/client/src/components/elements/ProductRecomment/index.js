import React, { useState } from 'react';
import './style.scss';
import CartProduct from '../CartProduct';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import * as Icon from 'react-feather';
const ProductRecomment = () => {
  const [state, setstate] = useState({
    product: [
      {
        _id: '1',
        title: 'test1',
        price: 50,
        discount: 0,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [
          {
            title: 'Chair',
          },
          {
            title: 'Decor',
          },
        ],
      },

      {
        _id: '2',
        title: 'test2',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '2',
        title: 'test2',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '3',
        title: 'test3',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '4',
        title: 'test4',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '5',
        title: 'test5',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '6',
        title: 'test6',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '7',
        title: 'test7',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '8',
        title: 'test8',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '9',
        title: 'test9',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '10',
        title: 'test10',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '11',
        title: 'test11',
        price: 40,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
    ],
  });

  return (
    <div className='list-recomment'>
      <div className='re-infor'>
        <div className='re-title'>Recomment</div>
        <div className='re-viewAll'>View All</div>
      </div>
      <ul className='re-list-product'>
        <ScrollMenu
          arrowLeft={<Icon.ChevronLeft className='arrow-prev' />}
          arrowRight={<Icon.ChevronRight className='arrow-next' />}
          clickWhenDrag={false}
          data={state.product.map((item, index) => {
            return <CartProduct item={item} key={item._id} />;
          })}
          dragging={false}
          hideArrows={true}
          hideSingleArrow={true}
          transition={+0.1}
          translate={0}
          wheel={true}
        />
      </ul>
    </div>
  );
};

export default ProductRecomment;
/*


      <ul className='re-list-product'>
        <ScrollMenu
          arrowLeft={<Icon.ChevronLeft className='arrow-prev' />}
          arrowRight={<Icon.ChevronRight className='arrow-next' />}
          clickWhenDrag={false}
          data={state.product.map((item, index) => {
            return <CartProduct item={item} key={item._id} />;
          })}
          dragging={false}
          hideArrows={true}
          hideSingleArrow={true}
          transition={+0.1}
          translate={0}
          wheel={true}
        />
      </ul>
*/
