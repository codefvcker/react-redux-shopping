import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__content-wrap">
        <div className="header__logo-wrap">
          <div className="header__logo">Shop</div>
          <span className="header__logo-descr">by codefvcker</span>
        </div>
        <nav className="header__nav">
          <NavLink exact to="/">
            Main
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
      </div>
    </div>
  );
};
