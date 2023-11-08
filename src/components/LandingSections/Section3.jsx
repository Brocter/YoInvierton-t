import isologo from "./../../assets/isotipo.png";
import Carousel from "../CarouselRegazzoni/Carousel"
import { foto1, foto2,foto3,foto4,foto5, foto6 } from "../../assets/carouselImages/carouselImages";

const images = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6
];

export const Section3 = () => {
    return(
        <section className='relative isolate py-8 after:content-[""] after:bg-primaryBlue after:absolute after:inset-[0] after:skew-y-[-5deg] after:z-[-1] lg:after:skew-y-[-3deg]'>
        <div className='flex mt-4 pb-[max(1rem,5vw)]'>
        <div className='w-[45%] lg:w-[50%]'></div>
        <div className='rounded-l-full bg-white h-[clamp(5.25rem,8vw,6rem)] skew-y-[-5deg] w-[58%] isolate lg:skew-y-[-3deg] xl:hidden'>
          <img className="py-[clamp(1.25rem,2vw,1.6rem)] pl-4 skew-y-[5deg] lg:skew-y-[3deg]" src={isologo} alt="isologo" />
        </div>
        </div>
        <div className='text-center text-white px-4 m-auto py-6 max-w-[clamp(25rem,60vw,42rem)] '>
          <h3 className='font-bold text-[clamp(1.7rem,3.5vw,3rem)]'>ÚLTIMO PROYECTO</h3>
          <h2 className='font-extrabold text-[clamp(2.4rem,6vw,4rem)]'>Jardin Regazzoni</h2>
          <p className='py-[clamp(1.25rem,3vw,2rem)] font-[400] text-[clamp(1.1rem,3vw,2rem)] tracking-[-0.02rem] leading-[1.4]'>Edificio residencial de <b>alta gama</b> emplazado en el 
            centro de Santiago del Estero</p>
        </div>
        <div className='text-white px-8 mx-auto py-[clamp(0.5rem,2vw,1rem)] max-w-[68rem] flex justify-center gap-12'>
          <div className="lg:flex items-center flex-row-reverse gap-8">
            <div className='rounded-full bg-white flex flex-col justify-center h-[clamp(5.25rem,13vw,8.3rem)] w-[clamp(5.25rem,13vw,8.3rem)] text-center mx-auto'>
              <h5 className='text-primaryBlue font-extrabold text-[clamp(2.5rem,5vw,4rem)]'>8%</h5>
            </div>
            <h5 className='text-center font-bold text-[clamp(1rem,2.6vw,2rem)] mt-2 lg:text-right'>Rentabilidad<br />anual en dólares</h5>
          </div>
          <div className="lg:flex items-center gap-8">
             <div className='rounded-full bg-white flex flex-col justify-center h-[clamp(5.25rem,13vw,8.3rem)] w-[clamp(5.25rem,13vw,8.3rem)] text-center mx-auto'>
                <h5 className='text-primaryBlue font-bold text-[clamp(1.7rem,3.8vw,3rem)] mb-[-0.8rem]'>1300</h5>
                <p className='text-primaryBlue font-[500] text-[clamp(1rem,2.9vw,2rem)]'>USD</p>
             </div>
            <h5 className='font-bold text-center text-[clamp(1rem,2.6vw,2rem)] mt-2 lg:text-left'>Monto mínimo<br />de inversión</h5>
          </div>
        </div>
        <div className="py-5 md:py-0"><Carousel images={images}/></div>
        
      
      </section>
    )
}


