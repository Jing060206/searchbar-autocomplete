import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="searchbook">Search</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
