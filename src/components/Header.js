import React from "react";
import "../styles/Header.css";
import logo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitch from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="cryptologopunk" className="img-logo" />

      <div className="search-container">
        <img src={searchIcon} alt="search-icon" className="search-icon" />
        <input
          type="text"
          placeholder="Collection, Item, User..."
          className="search-bar"
        />
      </div>

      <div className="headerItems">
        <button>Drops</button>
        <button>Marketplace</button>
        <button>Create</button>
      </div>

      <div className="headerActions">
        <button className="themeSwitch">
          <img src={themeSwitch} alt="themeChangeButton" />
        </button>
        <button className="loginButton">GET IN</button>
      </div>
    </div>
  );
};

export default Header;
