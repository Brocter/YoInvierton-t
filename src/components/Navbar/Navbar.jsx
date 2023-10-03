import React from "react";
import isologo from "./../../assets/isotipo.png";
import hamburger from "./../../assets/icons/menu.svg"

function Navbar() {
    return (
    <nav className='bg-white h-[5rem] w-full flex justify-between items-center px-5'>
      <img src={isologo} alt="logo" />
      <img src={hamburger} alt="menu" />
    </nav>
    );
  }

export default Navbar;