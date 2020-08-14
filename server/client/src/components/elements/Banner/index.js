import React, { useState, useEffect } from 'react';
import './style.scss';
import * as Icon from 'react-feather';
import Carousel from 'react-bootstrap/Carousel';
const Banner = (props) => {
  const [state, setState] = useState({
    banner: [
      {
        id: 1,
        image:
          'https://images.squarespace-cdn.com/content/v1/570be89f27d4bdad56921954/1548897735843-527QUFNER5UPPC1Y0S6D/ke17ZwdGBToddI8pDm48kCHChmuivJZ1Va5ov3ZJeg17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYcSGirBhY_3j1yQtntvGS73bypqQ-qjSV5umPUlGbQFAw/LOMBARDY+HOME+AWAY+FROM+HOME.jpg',
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

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  /*
activeIndex={index} onSelect={handleSelect}
*/
  return (
    <Carousel>
      {state.banner.slice(0, 4).map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className='d-block w-100'
              src={item.image}
              alt='Slide'
              height='500'
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
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

// {state.banner.slice(0, 4).map(item, index)=>{
//   return(
//     <Carousel.Item key={index}>
//     <img
//     className="d-block w-100"
//     src={item.image}
//     alt="slide"
//   />
//     </Carousel.Item>
//   );
// }}
