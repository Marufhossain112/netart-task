import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
