import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo-links-left">
          <div className="logo">
            <NavLink to="/" className="logo-link">
              <img src="/KrishCart-logo.svg" alt="KrishCart Logo" />
              <h3>KrishCart</h3>
            </NavLink>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <NavLink to="">New Arrivals</NavLink>{" "}
              </li>
              <li>
                <NavLink to="">Men</NavLink>
              </li>
              <li>
                <NavLink to="">Women</NavLink>
              </li>
              <li>
                <NavLink to="">Accessories</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="search-btns">
          <input type="text" placeholder="Search..."/>
          <button className="wishlist">
            <FaRegHeart />
          </button>
          <button className="myCart">
            <LiaCartPlusSolid />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
