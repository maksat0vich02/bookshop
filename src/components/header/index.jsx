import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useMainContext } from "../../Context/MainContext";

const Header = () => {
  const { darkMode, setDarkMode } = useMainContext();
  console.log(darkMode);
  return (
    <div>
      <header
        style={{
          background: darkMode ? "black" : "white",
        }}
      >
        <div className="container">
          <div className="header">
            <nav>
              <h4>Bookshop</h4>
              <a
                style={{
                  color: darkMode ? "white" : "black",
                }}
                href="#"
              >
                Categories
              </a>
              <a
                style={{
                  color: darkMode ? "white" : "black",
                }}
                href="#"
              >
                Recent
              </a>
              <a
                style={{
                  color: darkMode ? "white" : "black",
                }}
                href="#"
              >
                Books
              </a>
              <a
                style={{
                  color: darkMode ? "white" : "black",
                }}
                href="#"
              >
                About us
              </a>
            </nav>

            <div className="header-btn">
              <button className="header-btn">
                <IoIosSearch />
              </button>
              <button className="header-btn-two">
                <FaCartShopping />
              </button>
              <label className="ui-switch">
                <input
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  type="checkbox"
                />
                <div className="slider">
                  <div className="circle"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
