import React from "react";
import logo from "./../../assets/logo.png";
import hamburger from "./../../assets/icons/menu.svg"

function Navbar() {
    return (
    <nav className='bg-white h-[5rem] w-full flex justify-between items-center px-5'>
      <img src={logo} alt="logo" />
      <img src={hamburger} alt="menu" />
    </nav>
    );
  }

export default Navbar;