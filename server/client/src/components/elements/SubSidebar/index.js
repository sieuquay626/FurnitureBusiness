import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import io from 'socket.io-client';
// const socket = io(`${process.env.HOST_SERVER}`);
import { handleProductByCategory } from '../../../redux/actions/product';

const SubSidebar = (props) => {
  const category = useSelector((state) => state.category.listCategory);
  const dispatch = useDispatch();
  const handleClickSubCategory = (item) => {
    dispatch(handleProductByCategory(item));
    props.turnoff();
  };
  return (
    <ul className='sub'>
      {category.map((item, index) => {
        return item.parent != props.select ? null : (
          <li
            className='item-sub'
            key={index}
            onClick={() => handleClickSubCategory(item)}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default SubSidebar;
