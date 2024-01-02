import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import {logout} from "../../utils/firebase"
import signout from "../../assets/icons/signout_circle.png"
import portfolio from "../../assets/icons/apartment.png"
import password from "../../assets/icons/change_password.png"
import user from "../../assets/icons/user_circle.png"
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';

export function UserMenu({userName, userHandler}){
    const navigate = useNavigate()
    const [displayDropdown, setDisplayDropdown] = useState(false);

    const handleLogout = () => {
        logout().then(()=> {
            userHandler(undefined)
            navigate("/")
        })
    };    

    return(
        <div className="flex flex-col text-[1.2rem] w-[16rem] h-[3.5rem] border border-2 border-primaryBlue rounded-md hover:rounded-none hover:rounded-t-md cursor-pointer">
            <div onClick={() => setDisplayDropdown(!displayDropdown)} className="flex flex-row justify-start p-3 ml-[-3px]">
                <img src={user} width="45px" className="mt-[-0.55rem] mr-[0.7rem]"/>
                <div className="font-medium">{userName["name"] + " " + userName["surname"]}</div>
            </div>
            {displayDropdown && <motion.div initial={{opacity: 0}} animate={{opacity: 100 }} onMouseLeave={()=>setDisplayDropdown(!displayDropdown)} id="dropdown" className="flex flex-col justify-center mt-2 gap-2 shadow-lg shadow-primaryLightBlue border border-gray-200 rounded-b-md font-medium relative w-full top-[-28%] h-[12rem] z-[10] background-primaryBlue">
                <div className="flex border-b bg-white items-center justify-start border-gray-200 pl-3 h-[4rem] pt-2 p-2 hover:text-primaryBlue">
                    <img src={portfolio} width="40px" className="mr-[0.7rem]"/>
                    <Link to={"/home"}><div>Portfolio</div></Link>
                </div>
                <div className="flex border-b bg-white items-center justify-start border-gray-200 pl-4 p-2  h-[4rem]  hover:text-primaryBlue">
                    <img src={password} style={{ width: '30px', height: '30px' }} className="mr-[1rem]"/>
                    <Link to={"/home/password"}><div>Cambiar Contraseña</div></Link>
                </div>
                <div onClick={() => handleLogout()} className="flex bg-white border-b items-center justify-start border-gray-200 pl-[1rem]  h-[4rem] p-2 pb-3 hover:text-primaryBlue">
                    <img src={signout} style={{ width: '30px', height: '30px' }} className="mr-[1rem]"/>
                    <div>Cerrar Sesión</div>
                </div>
            </motion.div>}
        </div>
    )
}