import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      {/* logo image on the far left  */}
      <Link to="/">
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
          placeholder="Search for items"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* LINKS */}
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div class="header_option">
            <span className="header_option1">Hello Zuri</span>
            <span className="header_option2">Sign in</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div class="header_option">
            <span className="header_option1">Returns</span>
            <span className="header_option2">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div class="header_option">
            <span className="header_option1">Your</span>
            <span className="header_option2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div class="header_optionBasket">
            {/* shipping cart icon  */}
            <ShoppingCartIcon />
            {/* number of items in basket  */}
            <span className="header_option2 header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* checkout cart far right  */}
    </nav>
  );
}
