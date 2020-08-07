import React, { useState } from 'react';
import './style.scss';
import * as Icon from 'react-feather';
import ItemBanner from '../ItemBanner';
const Banner = (props) => {
  const [state, setstate] = useState({
    banner: [
      {
        id: 1,
        image:
          'https://cdn.shopify.com/s/files/1/0053/2792/files/eatingoutpalissade_1280x.jpg?v=1596441429',
      },
      {
        id: 2,
        image:
          'https://www.thespruce.com/thmb/5kSORqH6JsvOARFLkJtxF9MXyiU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pink-child-s-bedroom-interior-961931334-0741e0b74ccb4e91849ea1abf360ac1e.jpg',
      },
      {
        id: 3,
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aerin-for-the-shade-store-pinch-pleat-drapery-1-1569877290.jpg?resize=480:*',
      },
    ],
    bannerSelected: 0,
  });
  return (
    <div className='banner'>
      <div className='slider'>
        {state.banner.map((item, index) => {
          return (
            <div
              className={`slide ${
                state.bannerSelected === index ? 'selected' : ''
              }`}
              key={index}
            >
              <img className='banner-img' src={item.image} alt='No banner' />
            </div>
          );
        })}
        <ItemBanner />
      </div>

      <Icon.ChevronLeft className='btn-left' />
      <Icon.ChevronRight className='btn-right' />
      <ul className='control-dots'>
        <li className='banner-dot active'></li>
        <li className='banner-dot'></li>
        <li className='banner-dot'></li>
      </ul>
    </div>
  );
};

export default Banner;
