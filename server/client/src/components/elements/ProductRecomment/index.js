import React, { useState, useEffect } from 'react';
import './style.scss';
import CartProduct from '../CartProduct';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import * as Icon from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { handleProductRecomment } from '../../../redux/actions/product';
const ProductRecomment = () => {
  const [state, setstate] = useState({
    product: [
      {
        _id: '1',
        title: 'test1',
        price: 1800,
        discount: 0,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/07760601/resize-h800%5Ecompr-r85/1243/124365155/default_name.jpg',
        categories: [
          {
            title: 'Sofas',
          },
          {
            title: 'Decor',
          },
        ],
      },

      {
        _id: '2',
        title: 'test2',
        price: 1500,
        discount: 5,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/93528727/resize-h310-w310%5Ecompr-r85/6117/61171446/Everleigh+105%2522+Reversible+Sectional+with+Ottoman.jpg',
        categories: [
          {
            title: 'Sofas',
          },
        ],
      },
      {
        _id: '2',
        title: 'test2',
        price: 800,
        discount: 5,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/8226109/resize-h310-w310%5Ecompr-r85/1186/118614061/Alori+Task+Chair.jpg',
        categories: [],
      },
      {
        _id: '3',
        title: 'test3',
        price: 40,
        discount: 5,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/73686153/resize-h310-w310%5Ecompr-r85/9890/98906107/15%2522+Top+Freezer+7.4+cu.+ft.+Energy+Star+Refrigerator.jpg',
        categories: [],
      },
      {
        _id: '4',
        title: 'test4',
        price: 170,
        discount: 5,
        coverImage:
          'https://demo.hasthemes.com/ginza-preview/ginza/assets/images/product/1_1-600x800.jpg',
        categories: [],
      },
      {
        _id: '5',
        title: 'test5',
        price: 1320,
        discount: 5,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/35032867/resize-h310-w310%5Ecompr-r85/1061/106150229/24%2522+Counter+Depth+Top+Freezer+9.9+cu.ft+Refrigerator.jpg',
        categories: [],
      },
      {
        _id: '6',
        title: 'test6',
        price: 740,
        discount: 5,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/91567632/resize-h310-w310%5Ecompr-r85/1120/112054862/Vicki+Vitreous+China+Oval+Pedestal+Bathroom+Sink+with+Overflow.jpg',
        categories: [],
      },
      {
        _id: '7',
        title: 'test7',
        price: 220,
        discount: 5,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/94206687/resize-h310-w310%5Ecompr-r85/6172/61726242/Handmade+Turquoise+Water+Glass+Rectangular+Vessel+Bathroom+Sink.jpg',
        categories: [],
      },
      {
        _id: '8',
        title: 'test8',
        price: 40,
        discount: 5,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/45403975/resize-h310-w310%5Ecompr-r85/4402/44021865/Townsend+30%2522+Pedestal+Bathroom+Sink+with+Overflow.jpg',
        categories: [],
      },
      {
        _id: '9',
        title: 'test9',
        price: 40,
        discount: 5,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/54287825/resize-h310-w310%5Ecompr-r85/1683/16833771/Recessed+or+Surface+Mount+Frameless+2+Medicine+Cabinet+with+2+Adjustable+Shelves.jpg',
        categories: [],
      },
      {
        _id: '10',
        title: 'test10',
        price: 40,
        discount: 5,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/87532341/resize-h310-w310%5Ecompr-r85/1025/102531871/Galen+Surface+Mount+Framed+2+Door+Medicine+Cabinet+with%25A0Shelves.jpg',
        categories: [],
      },
      {
        _id: '11',
        title: 'test11',
        price: 40,
        discount: 5,
        coverImage:
          'https://secure.img1-fg.wfcdn.com/im/61622185/resize-h310-w310%5Ecompr-r85/6749/67494983/Parth+Vanity+Tray.jpg',
        categories: [],
      },
    ],
  });
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  dispatch(handleProductRecomment({ user: auth.userInfo._id }));
  // useEffect(() => {

  // }, []);

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
