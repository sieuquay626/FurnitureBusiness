import React from 'react';
import './style.scss';
import { IMAGES } from '../../../assets';

const Loading = () => {
  console.log('ok');
  return (
    <div className='loading'>
      <img src={IMAGES.loading} alt='No loading image' />
    </div>
  );
};

export default Loading;

/*


*/
