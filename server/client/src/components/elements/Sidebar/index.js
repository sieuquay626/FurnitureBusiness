import React, { useState, useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { handleCategory } from '../../../redux/actions/category';
const Sidebar = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    parentMenu: [
      { id: 1, title: 'Furniture' },
      { id: 2, title: 'Lighting' },
      { id: 3, title: 'Outdoor' },
      { id: 4, title: 'Wall' },
      { id: 5, title: 'Rugs' },
      { id: 5, title: 'Brand' },
    ],
  });
  useEffect(() => {
    dispatch(handleCategory());
  }, []);

  const SubMenuFurniture = () => {
    return <h1>Hi</h1>;
  };
  return (
    <div className='sidebar'>
      <div className='global-navigation'>
        {state.parentMenu.map((item, index) => {
          return (
            <div className='parent-menu' key={index}>
              <div className='title'>{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className='global-navigation-sub'>
        <SubMenuFurniture />
      </div>
    </div>
  );
};

export default Sidebar;

/*
<div className='parent-menu'>
<div className='title'>Furniture</div>
</div>
<div className='parent-menu'>Lighting</div>
<div className='parent-menu'>Outdoor</div>
<div className='parent-menu'>Wall</div>
<div className='parent-menu'>Brands</div>
</div>

*/
