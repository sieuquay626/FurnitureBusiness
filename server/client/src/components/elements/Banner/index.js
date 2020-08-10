import React, { useState, useEffect } from 'react';
import './style.scss';
import * as Icon from 'react-feather';
const Banner = (props) => {
  const [state, setState] = useState({
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
          'https://d3tt7xf0u0byqe.cloudfront.net/media/catalog/product/cache/image/resized/960x1920/w3themes/banner7/20200803_Ginny_Macdonald_Desktop.jpg',
      },
      {
        id: 4,
        image:
          'https://d3tt7xf0u0byqe.cloudfront.net/skin/frontend/lulu/lulu/images/sarah-sherman/SSS_fullwidth-img.jpg',
      },
    ],
    bannerSelected: 0,
  });

  const handleClickChangeSlide = (index) => {
    let temp = { ...state };
    temp.bannerSelected = index;
    setState(temp);
  };

  const handleLeftBanner = () => {
    let temp = { ...state };
    if (state.bannerSelected > 0) {
      temp.bannerSelected -= 1;
    }
    setState(temp);
  };

  const handleRightBanner = () => {
    let temp = { ...state };
    if (state.bannerSelected < state.banner.length - 1) {
      temp.bannerSelected += 1;
    }
    setState(temp);
  };

  // useEffect(() => {
  //   const banner = setTimeout(() => {
  //     let temp = { ...state };
  //     if (temp.asc && temp.bannerSelected < temp.banner.length - 1) {
  //       temp.bannerSelected += 1;
  //     } else {
  //       if (temp.bannerSelected == temp.banner.length - 1) {
  //         temp.asc = false;
  //       }
  //     }

  //     if (!temp.asc && temp.bannerSelected > 0) {
  //       temp.bannerSelected -= 1;
  //     } else {
  //       if (temp.bannerSelected == 0) {
  //         temp.asc = true;
  //       }
  //     }

  //     setState(temp);
  //   }, 3000);
  //   return () => clearTimeout(banner);
  // }, []);

  return (
    <div className='banner'>
      <div className='slider'>
        {state.banner.slice(0, 4).map((item, index) => {
          return (
            <div
              className={` slide  ${
                !index ? `selected${state.bannerSelected + 1}` : ''
              }`}
              key={index}
            >
              <img className='banner-img' src={item.image} alt='No banner' />
            </div>
          );
        })}
      </div>

      <Icon.ChevronLeft className='btn-left' onClick={handleLeftBanner} />
      <Icon.ChevronRight className='btn-right' onClick={handleRightBanner} />
      <ul className='control-dots'>
        {state.banner.slice(0, 4).map((item, index) => {
          return (
            <li
              className={`banner-dot d${index + 1} ${
                state.bannerSelected == index ? `active` : ''
              }`}
              key={index}
              onClick={() => handleClickChangeSlide(index)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Banner;
/*

`slide ${!index ? 'default' : ''} ${
                state.bannerSelected === index ? `selected${index + 1}` : ''
              }`

<li className='banner-dot d1 active'></li>
        <li className='banner-dot d2'></li>
        <li className='banner-dot d3'></li>
        <li className='banner-dot d4'></li>
*/
