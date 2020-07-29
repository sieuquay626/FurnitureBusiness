import React, { useState, useEffect } from 'react';
import MenuDestop from '../menuDesktop';
import MenuMobile from '../menuMobile';

const Header = (props) => {
  const [menu, setMenu] = useState({
    displayMenu: false,
    widthWindow: 0,
  });

  const updateWidth = () => {
    setMenu({ ...menu, widthWindow: window.innerWidth });
  };

  const renderMenuMobile = () => {
    return <MenuMobile />;
  };

  const renderMenuDestop = () => {
    return (
      <React.Fragment>
        <MenuDestop />
      </React.Fragment>
    );
  };

  const renderMenu = () => {
    if (window.innerWidth <= 800) {
      return renderMenuMobile();
    } else {
      return renderMenuDestop();
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('resize', updateWidth);
    }
  });

  return renderMenu();
};

export default Header;
