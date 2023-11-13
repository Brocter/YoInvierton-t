import { Link } from "react-router-dom"

export function ButtonIniciarSesion(){
    return(
        <Link to="/iniciar-sesion">
        <button className='flex py-2 border-primaryBlue border-2 justify-center items-center px-8
                rounded-md text-primaryBlue font-[500] text-[1.2rem] xl:text-[clamp(1.2rem,1.5vw,1.5rem)] hover:bg-primaryBlue hover:text-white transition-[500]'>Iniciar Sesión</button>
        </Link>
    )
}