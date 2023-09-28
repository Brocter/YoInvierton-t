import React from 'react';
import image from './../assets/edificioBackground.png';
import whatsappIcon from './../assets/icons/whatsapp.svg';

const Landing = () => {
  return (
    <div className='h-screen'>
      <section className="font-barlow text-black py-[2rem]">
        <div className="mx-auto px-6 text-left max-w-[30rem]">
          <h1 className="font-extrabold text-5xl tracking-[-0.08rem] leading-[1.2]">
            ¡Invertí en <br />Pesos y ganá <br />en <b className="text-primaryBlue">Dólares!</b>
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
        <img className="object-contain w-[100%]" src={image} alt="background" />
      </section>
      <section className='text-center pt-[2rem] pb-[8rem]'>
        <div className='pb-2'>
          <h2 className='font-extrabold text-[4.5rem] text-primaryBlue'>6</h2>
          <h6 className='text-black text-[1.2rem] font-[600] mt-[-1rem]'>AÑOS<br />CONSTRUYENDO</h6>
        </div>
        <div className='py-2'>
          <h2 className='font-extrabold text-[4.5rem] text-primaryBlue'>78</h2>
          <h6 className='text-black text-[1.2rem] font-[600] mt-[-1rem]'>PROYECTOS<br />ENTREGADOS</h6>  
        </div>
        <div className='pt-2'>
          <h2 className='font-extrabold text-[4.5rem] text-primaryBlue'>165</h2>
          <h6 className='text-black text-[1.2rem] font-[600] mt-[-1rem]'>INVERSIONISTAS</h6>
        </div>
      </section>
      <section className='relative isolate py-8 after:content-["] after:bg-primaryBlue after:absolute after:inset-[0] after:skew-y-[-5deg] after:z-[-1]'>
        <div className='text-center text-white px-6 mx-auto py-8 max-w-[25rem] '>
          <h3 className='font-bold text-[1.7rem]'>ULTIMO PROYECTO</h3>
          <h2 className='font-extrabold text-[2.4rem]'>Jardin Regazzoni</h2>
          <p className='py-5'>Edificio residencial de alta gama emplazado en el 
            centro de Santiago del Estero</p>
        </div>
        <div className='text-white px-8 mx-auto py-4 max-w-[25rem] '>
          <div className='flex items-center justify-between pb-6'>
            <h5 className='font-bold text-right text-[1.5rem]'>Rentabilidad<br />anual en dólares</h5>
            <div className='rounded-full bg-white pl-2 flex flex-col justify-center h-[6.25rem] w-[6.25rem] text-center'>
              <h5 className='text-primaryBlue font-extrabold text-[2.5rem]'>8%</h5>
            </div>
          </div>
          <div className='flex items-center justify-between'>
             <div className='rounded-full bg-white flex flex-col justify-center h-[6.25rem] w-[6.25rem] text-center'>
                <h5 className='text-primaryBlue font-extrabold text-[1.7rem]'>1300</h5>
                <p className='text-primaryBlue font-[500] text-[1.2rem]'>USD</p>
             </div>
            <h5 className='font-bold text-left text-[1.5rem]'>Monto mínimo<br />de inversión</h5>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Landing;