import React from 'react';
import image from './../assets/edificioBackground.png';
import whatsappIcon from './../assets/icons/whatsapp.svg';

const Landing = () => {
  return (
    <div className='h-screen'>
      <section className="font-barlow text-black h-screen mt-4">
        <div className="mx-6 text-left">
          <h1 className="font-extrabold text-5xl tracking-[-0.08rem] leading-[1.2]">
            ¡Invertí en <br />Pesos y ganá <br /> en <b className="text-primaryBlue">Dólares!</b>
          </h1>
          <h6 className='mt-5 text-[1.2rem] font-[500] leading-[1.25]'>
            Sumate a los que invierten de la manera más segura y confiable: en <b className="text-primaryBlue">Propiedades</b>
          </h6>
          <div className="flex mt-8 mb-6 gap-[5%]">
            <button className='w-[47.5%] bg-primaryBlue text-primaryWhite  py-3 font-[500] rounded-md text-[1.2rem]'>Registrate</button>

            <button className='flex w-[47.5%] py-3 border-complementaryGreen border-2 justify-center items-center
            rounded-md text-complementaryGreen font-[500] text-[1.2rem]'>
              <img className="pr-1" src={whatsappIcon} alt="wppIcon" />Consultanos</button>
          </div>
        </div>
        <img src={image} alt="" />
      </section>
      <section className='text-center'>
        <div className=''>
          <h2>6</h2>
          <h6>AÑOS<br />CONSTRUYENDO</h6>
        </div>
        <div>
          <h2>78</h2>
          <h6>PROYECTOS<br />ENTREGADOS</h6>  
        </div>
        <div>
          <h2>165</h2>
          <h6>INVERSIONISTAS</h6>
        </div>
      </section>
    </div>
    
  );
};

export default Landing;