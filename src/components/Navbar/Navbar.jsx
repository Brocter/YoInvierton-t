import React from "react";
import isologo from "./../../assets/isotipo.png";
import hamburger from "./../../assets/icons/menu.svg"
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className='bg-white h-[5rem] w-full flex justify-between items-center px-5'>
      <Link to={"/"}>
      <img src={isologo} alt="logo" />
      </Link>
      
      <img src={hamburger} alt="menu" />
    </nav>
    );
  }

export default Navbar;