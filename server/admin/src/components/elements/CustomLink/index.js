import React from 'react';
import { Route, Link } from 'react-router-dom';
import './style.scss';
const CustomLink = ({
  label,
  to,
  className,
  muiltipleTo,
  activeOnlyWhenExact,
  onClick,
  imgAlt,
  imgTop,
  icon,
}) => {
  return (
    <Route
      path={muiltipleTo ? muiltipleTo : to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li
          className={
            match
              ? `${className ? className : 'custom-menu active'}`
              : 'custom-menu'
          }
          style={{ listStyleType: 'none' }}
        >
          <Link
            to={to}
            onClick={
              onClick
                ? () => {
                    onClick();
                  }
                : null
            }
          >
            {icon ? icon : null}
            {imgAlt ? (
              <img src={imgAlt} alt='logo-menu' className='logo-left' />
            ) : null}
            {imgTop ? (
              <img src={imgTop} alt='logo-menu' className='logo-top' />
            ) : null}
            {label ? label : null}
          </Link>
        </li>
      )}
    />
  );
};
export default CustomLink;
