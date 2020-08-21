import React, { useState, useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { handleCategory } from '../../../redux/actions/category';
import SubSidebar from '../SubSidebar';
const Sidebar = () => {
  useEffect(() => {
    dispatch(handleCategory());
  }, []);

  const category = useSelector((state) => state.category.listCategory);
  const dispatch = useDispatch();
  const initState = {
    category,
    selected: '',
  };
  const [state, setState] = useState(initState);

  const handleChangeSelect = (id) => {
    let temp = { ...state };
    if (!temp.selected || temp.selected != id) {
      temp.selected = id;
    } else {
      temp.selected = '';
    }
    setState({ ...temp });
  };

  const handleTurnOffSub = () => {
    setState(initState);
  };
  return (
    <div className='sidebar'>
      <div className='global-navigation'>
        <div className='global-navigation-title'></div>
        {category.map((item, index) => {
          return item.parent ? null : (
            <div
              className='parent-menu'
              key={index}
              onClick={() => handleChangeSelect(item._id)}
            >
              <div className='title'>{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className={`global-navigation-sub ${state.selected ? 'show' : ''}`}>
        <SubSidebar select={state.selected} turnoff={handleTurnOffSub} />
      </div>
    </div>
  );
};

export default Sidebar;
