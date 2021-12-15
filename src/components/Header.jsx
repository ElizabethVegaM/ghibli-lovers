import React from "react";
import ghibliLogo from "../images/ghibli-logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-logo-container">
        <img src={ghibliLogo} alt="Ghibli Studio Logo" className="header-logo" />
        <h1>GhibliFan</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
