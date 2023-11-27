import { useEffect,useState } from "react";
import InputForm from "../InputForm";
import { Link } from 'react-router-dom';


const Step2 = (props) => {
    const {handleInputChange, onNext, onPrev} = props;

    return(
        <div className="grid px-4 gap-4 py-4 mx-auto animate-slide-in max-w-[35rem]"> 
            <div className='flex justify-between items-center'>
            <h2 className='text-[2.5rem] font-extrabold'>Ingresa tus datos</h2>
            <Link className="underline text-primaryBlue pt-4"to="/iniciar-sesion">Iniciar Sesión</Link>
            </div>
            <div className="flex gap-4 justify-between items-center">
            <InputForm type="text" title="Nombre*" name="name" onChange={handleInputChange} placeholder="Juan" height={4}/>
            <InputForm type="text" title="Apellido*" name="lastName" onChange={handleInputChange} placeholder="Pérez" height={4}/>
            </div>
            <InputForm type="number" title="DNI" name="DNI" onChange={handleInputChange} placeholder="11. 111 . 111" height={4}/>
            <button className="bg-primaryBlue rounded-xl py-3 justify-center text-white text-[1.2rem] font-medium" onClick={onNext}>SIGUIENTE</button>
            <button className="bg-primaryLightBlue border-primaryBlue border rounded-xl py-3 justify-center text-primaryBlue text-[1.2rem] font-medium" onClick={onPrev}>ATRÁS</button>
            
        </div>
    )
}

export default Step2