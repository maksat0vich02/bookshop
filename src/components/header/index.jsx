import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <nav>
              <h4>Bookshop</h4>
              <a href="#">Categories</a>
              <a href="#">Recent</a>
              <a href="#">Books</a>
              <a href="#">About us</a>
            </nav>

            <div className="header-btn">
              <button className="header-btn">
                <IoIosSearch />
              </button>
              <button className="header-btn-two">
                <FaCartShopping />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
