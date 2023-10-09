import React from 'react';
import whatsappIcon from './../../assets/icons/whatsapp.svg';
import background from './../../assets/edificioBackground.png';
import { Link } from 'react-router-dom';

export const Section1 = () => {
    return(
        <section className="font-barlow text-black py-[2rem]">
            <div className="mx-auto px-6 text-left max-w-[30rem]">
              <h1 className="font-extrabold text-5xl tracking-[-0.08rem] leading-[1.2]">
                ¡Invertí en <br />Pesos y ganá <br />en <b className="text-primaryBlue">Dólares!</b>
              </h1>
              <h6 className='mt-5 text-[1.2rem] font-[500] leading-[1.25]'>
                Sumate a los que invierten de la manera más segura y confiable: en <b className="text-primaryBlue">Propiedades</b>
              </h6>
              
              <div className="flex mt-8 mb-6 gap-[5%]">
                <Link to={"/sesion"} className='w-[47.5%] bg-primaryBlue text-primaryWhite mx-auto py-3 font-[500] rounded-md text-[1.2rem]'>
                  <button className='text-center w-[100%]'>Registrate</button>
                </Link>
                <button className='flex w-[47.5%] py-3 border-complementaryGreen border-2 justify-center items-center
                rounded-md text-complementaryGreen font-[500] text-[1.2rem]'>
                  <img className="pr-1" src={whatsappIcon} alt="wppIcon" />Consultanos</button>
              </div>
            </div>
            <img className="object-contain w-[100%]" src={background} alt="background" />
        </section>
    )
}

