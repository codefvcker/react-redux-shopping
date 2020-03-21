import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import { connect } from "react-redux";

export const Header = ({ user }) => {
  return (
    <div className="header">
      <div className="header__content-wrap">
        <div className="header__logo-wrap">
          <div className="header__logo">Shop</div>
          <span className="header__logo-descr">by codefvcker</span>
        </div>
        {user ? (
          <nav className="header__nav">
            <NavLink exact to="/">
              Main
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <button onClick={handleSignOut}>Sign Out</button>
          </nav>
        ) : (
          <nav className="header__nav">
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </nav>
        )}
      </div>
    </div>
  );
};

export default connect(({ shopReducer }) => ({
  user: shopReducer.user
}), {})(Header);
