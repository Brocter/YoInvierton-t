import React from 'react';
import whatsappIcon from './../../assets/icons/whatsapp.svg';
import background from './../../assets/edificioBackground.png';
import edificioDesktop from './../../assets/edificioDesktop.png';
import { Link } from 'react-router-dom';
import announcement from './../../assets/vox 1.png'

export const Section1 = () => {
    return(
        <section className="font-barlow text-black relative lg:flex lg:pb-[20rem]">
            <div className='w-[50%]'></div>
            <div className="mx-auto px-7 text-left justify-left max-w-[32rem] lg:pt-[3.5rem] lg:ml-0">
              <div className='hidden lg:flex max-h-[2.9rem] gap-2'>
                <img className="object-cover" src={announcement} alt="megafono" />
                <div>
                  <h6 className='my-[-0.25rem] font-bold text-[0.75rem] text-primaryBlue'>NOVEDAD</h6>
                  <p className='my-[-0.25rem] text-[1rem] text-black'>Las cosas se mueven rápido en Jardin Regazzoni</p>
                  <p className='my-[-0.3rem] text-[0.75 rem] text-primaryBlue'>Leer articulo completo</p>
                </div>
              </div>
              <h1 className="font-extrabold text-[clamp(3rem,4.2vw,3.6rem)] tracking-[-0.08rem] leading-[1.2] mt-8">
                ¡Invertí en Pesos y ganá en <b className="text-primaryBlue">Dólares!</b>
              </h1>
              <h6 className='mt-5 text-[clamp(1.2rem,3vw,1.5rem)] font-[500] leading-[1.25]'>
                Sumate a los que invierten de la manera más segura y confiable: en <b className="text-primaryBlue">Propiedades</b>
              </h6>
              
              <div className="flex mt-8 mb-6 gap-[5%]">
                <Link to={"/registro"} className='w-[47.5%] bg-primaryBlue text-primaryWhite mx-auto py-3 font-[500] rounded-md text-[1.2rem]'>
                  <button className='text-center w-[100%]'>Registrate</button>
                </Link>
                <button className='flex w-[47.5%] py-3 border-complementaryGreen border-2 justify-center items-center
                rounded-md text-complementaryGreen font-[500] text-[1.2rem]'>
                  <img className="pr-1" src={whatsappIcon} alt="wppIcon" />Consultanos</button>
              </div>
            </div>
            <img className="object-fit hidden w-[100%] lg:inline lg:absolute z-[-1]" src={edificioDesktop} alt="background" />
            <img className="object-contain w-[100%] lg:hidden" src={background} alt="background" />
        </section>
    )
}

