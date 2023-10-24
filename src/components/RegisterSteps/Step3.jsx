import { useEffect,useState } from "react";
import InputForm from "../InputForm";
import { Link } from 'react-router-dom';

const Step3 = (props) => {
    const {handleInputChange, onSubmit, onPrev} = props;
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true)
    },[])
    return(
    <div className={`flex flex-col px-4 gap-4 py-4 mx-auto animate-slide-in`}> <div className='flex justify-between items-center'>
        <h2 className='text-[2.5rem] font-extrabold'>Crear Cuenta</h2>
        <Link className="underline text-primaryBlue pt-4"to="/iniciar-sesion">Iniciar Sesión</Link>
        </div>
        <InputForm type="password" title="Contraseña*" name="password" onChange={handleInputChange} placeholder="●●●●●●●●●●●●●●"/>
        <InputForm type="password" title="Repetí la contraseña*" name="password" onChange={handleInputChange} placeholder="●●●●●●●●●●●●●●"/>
        <button className="bg-primaryBlue rounded-xl py-3 justify-center text-white text-[1.2rem] font-medium" onClick={onSubmit}>CREAR CUENTA</button>
        <button className="bg-primaryLightBlue border-primaryBlue rounded-xl py-3 justify-center text-primaryBlue text-[1.2rem] font-medium" onClick={onPrev}>ATRÁS</button>
        
    </div>
    )
}

export default Step3