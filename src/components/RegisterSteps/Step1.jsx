import { useEffect, useState } from "react";
import { AuthGoogle } from '../Auth/AuthGoogle'
import { Link } from 'react-router-dom';
import InputForm from "../InputForm";



const Step1 = (props) => {
    
    const {handleInputChange, signInWithGoogle, onNext} = props;
    return(
        <div className="grid px-4 gap-4 py-4 mx-auto animate-slide-in max-w-[35rem]">
            <div className='flex justify-between items-center'>
            <h2 className='text-[2.5rem] font-extrabold'>Crear Cuenta</h2>
            <Link className="underline text-primaryBlue pt-4"to="/iniciar-sesion">Iniciar Sesión</Link>
            </div>
            <InputForm type={"email"} title={"Email"} name={"email"} onChange={handleInputChange} placeholder={"ejemplo@gmail.com"}/>
            <button className="bg-primaryBlue rounded-xl py-3 justify-center text-white text-[1.2rem] font-medium" onClick={onNext}>CREAR CUENTA</button>
        </div>
    )
}

export default Step1