import {useState} from "react";
import isologo from "./../../assets/isotipo.png";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { NavHandlers } from "./NavbarHandlers";
import { ButtonIniciarSesion } from "./ButtonIniciarSesion";



function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const hamburgerMenu = !nav ? (
    <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.125 10.4635H35.875" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.125 17.9375H35.875" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.125 25.4115H35.875" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ) : (
    <AiOutlineClose />
  );
  const hamburger = <div className="text-[26px]">{hamburgerMenu}</div>;


    return (
    <nav className='flex static top-0 z-30 w-full h-[6rem] lg:h-[7rem]'>
      <div className="flex justify-between items-center w-full px-4 max-w-[90rem] mx-auto lg:px-8">
      <Link to={"/"}>
      <img src={isologo} alt="logo" />
      </Link>
      
      <div className="lg:hidden cursor-pointer" onClick={handleClick}>
        {hamburger}
      </div>
      <div className="hidden lg:flex justify-between items-center gap-[6rem] font-[400] text-[1.2rem] xl:text-[clamp(1.2rem,1.5vw,1.5rem)] ">
        <a href="https://medium.com/@yoinvierto" className="hover:text-primaryBlue cursor-pointer">Novedades</a>
        <Link to="/inversiones">
        <p className="hover:text-primaryBlue cursor-pointer">Oportunidades</p>
        </Link>
        <ButtonIniciarSesion/>
      </div>
      </div>
      <NavHandlers nav={nav} handleClose={handleClose}/>
    </nav>
    );
  }

export default Navbar;