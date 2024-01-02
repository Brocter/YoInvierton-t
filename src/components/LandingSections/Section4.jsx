import { useEffect, useState, useRef } from "react";
import OportunidadesCards from '../OportunidadesCards/OportunidadesCards';
import OportunidadesCarousel from '../OportunidadesCarousel/OportunidadesCarousel';
import { Link } from 'react-router-dom';


export const Section4 = ({topInvestments}) => {
    return(
        <section className='py-[6rem] text-black md:text-center'>
        <div className='px-4'>
        <h2 className='font-extrabold text-[clamp(3rem,4.2vw,3.6rem)] text-gray-700 tracking-[-0.08rem] leading-[1.2] md:text-center'><span className='text-primaryBlue'>Oportunidades</span> de Inversión</h2>
        <h4 className='text-[clamp(1.5rem,2vw,1.75rem)] font-bold leading-[1.2] py-6 text-gray-700'>Crea tu cuenta. Elegi cuanto invertis. Crece en <b className='text-primaryBlue'>Dólares</b></h4>
        </div>
        <div className='py-[2.5rem]'>
            <div className="md:hidden">
                {topInvestments.length > 0 && <OportunidadesCarousel topInvestments={topInvestments}/>}
            </div>
            <div className='hidden md:block px-4 mx-auto'>
                {topInvestments.length > 0  && <OportunidadesCards topInvestments={topInvestments}/>}
            </div>
            <div className='mx-auto flex justify-center lg:pt-4'>
            <Link to="/inversiones" preventScrollReset={true} >
                <button className="bg-primaryLightBlue border-primaryBlue border rounded-xl py-3 text-primaryBlue text-[1.2rem] font-medium text-center px-[6rem] my-[2rem]">Ver más</button>
            </Link>
            </div>
        </div>
       
      </section>
    )
}
