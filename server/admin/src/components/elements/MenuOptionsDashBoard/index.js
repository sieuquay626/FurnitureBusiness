import React from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const MenuOptionsDashBoard = (props) => {
  const { id, active, handleClick } = props;

  return (
    <li
      className={`menu-item ${id === active ? 'active' : ''}`}
      onClick={() => handleClick(id)}
    >
      <Link to={props.path}>
        <Icon.User />
        <p>{props.option}</p>
      </Link>
    </li>
  );
};

export default MenuOptionsDashBoard;
