import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  return (
    <nav className="header">
      {/* logo image on the far left  */}
      <Link to="/login">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/bison/bison_PNG92400.png"
          alt="company-logo"
        />
      </Link>
      {/* search bar on left hand side  */}
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="ugly ass search bar "
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3 links on the right hand side  */}
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div class="header_option">
            <span>Hello</span>
            <span>Sign in</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div class="header_option">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div class="header_option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
      </div>
      {/* checkout cart far right  */}
    </nav>
  );
}
