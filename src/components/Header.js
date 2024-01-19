import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
  const iconStyle = { color: '#5A5A5A' };
  return (
    <>
      <div className="top-bar">¡Descuentos de año nuevo!</div>
      <header>
        <FontAwesomeIcon icon={faBars} style={iconStyle} />
        <FontAwesomeIcon icon={faCartShopping} style={iconStyle} />
      </header>
    </>
  );
};

export default Header;
