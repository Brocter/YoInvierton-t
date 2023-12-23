import React, { useState, useEffect } from "react";
import { getUserData } from "../../utils/firebase";
import isologo from "./../../assets/isotipo.png";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { NavHandlers } from "./NavbarHandlers";
import { ButtonIniciarSesion } from "./ButtonIniciarSesion";
import { UserMenu } from "./UserMenu";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [userState, setUserState] = useState();

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    //check if user is already logged.
    if (user != null) {
      getUserData(user["uid"]).then((userData) => {
        setUserState(userData);
      });
    }
  }, []);

  const hamburgerMenu = !nav ? (
    <svg
      width="41"
      height="36"
      viewBox="0 0 41 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.125 10.4635H35.875"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.125 17.9375H35.875"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.125 25.4115H35.875"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <AiOutlineClose />
  );
  const hamburger = <div className="text-[26px]">{hamburgerMenu}</div>;

  return (
    <nav className="flex flex-row overflow-visible items-start pt-8 static justify-between top-0 z-30 w-full h-[6rem] px-4 lg:px-[4rem] lg:h-[7rem]">
      <div id="menu" className="flex flex-row max-w-[90rem]">
        <Link to={"/"}>
          <img src={isologo} alt="logo" />
        </Link>
        <div className="hidden lg:flex justify-between items-center gap-[3.5rem] font-[400] text-[1.2rem] ml-[3rem] xl:text-[clamp(1.2rem,1.5vw,1.5rem)] ">
          <Link to="/">
            <p className="hover:text-primaryBlue cursor-pointer text-gray-600 font-medium">
              Inicio
            </p>
          </Link>
          <a
            href="https://medium.com/@yoinvierto"
            className="hover:text-primaryBlue cursor-pointer text-gray-600 font-medium"
          >
            Novedades
          </a>
          <Link to="/inversiones">
            <p className="hover:text-primaryBlue cursor-pointer text-gray-600 font-medium">
              Inversiones
            </p>
          </Link>
        </div>
      </div>
      <div
        id="buttons"
        className="flex items-center justify-center w-[15rem] hidden lg:inline-block"
      >
        {!userState && <ButtonIniciarSesion />}
        {userState && <UserMenu userName={userState["fullName"]} userHandler={setUserState}/>}
      </div>
      <div className="lg:hidden cursor-pointer" onClick={handleClick}>
        {hamburger}
      </div>
      <NavHandlers nav={nav} handleClose={handleClose} />
    </nav>
  );
}

export default Navbar;
