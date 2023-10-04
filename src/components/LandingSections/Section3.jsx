import isologo from "./../../assets/isotipo.png";
import Carousel from "../Carousel/Carousel"

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export const Section3 = () => {
    return(
        <section className='relative isolate py-8 after:content-[""] after:bg-primaryBlue after:absolute after:inset-[0] after:skew-y-[-5deg] after:z-[-1]'>
        <div className='flex mt-4 pb-[max(1rem,5vw)]'>
        <div className='content-[""] w-[45%]'></div>
        <div className='rounded-l-full bg-white h-[5.25rem] object-cover skew-y-[-5deg] w-[58%]'>
          <img className="py-5 pl-4 skew-y-[5deg]" src={isologo} alt="isologo" />
        </div>
        </div>
        <div className='text-center text-white px-6 m-auto py-8 max-w-[25rem] '>
          <h3 className='font-bold text-[1.7rem]'>ÚLTIMO PROYECTO</h3>
          <h2 className='font-extrabold text-[2.4rem]'>Jardin Regazzoni</h2>
          <p className='py-5 font-[500] text-[1.2rem]'>Edificio residencial de alta gama emplazado en el 
            centro de Santiago del Estero</p>
        </div>
        <div className='text-white px-8 mx-auto py-4 max-w-[25rem] '>
          <div className='flex items-center justify-between pb-6'>
            <h5 className='font-bold text-right text-[1.5rem]'>Rentabilidad<br />anual en dólares</h5>
            <div className='rounded-full bg-white flex flex-col justify-center h-[5.25rem] w-[5.25rem] text-center'>
              <h5 className='text-primaryBlue font-extrabold text-[2rem]'>8%</h5>
            </div>
          </div>
          <div className='flex items-center justify-between'>
             <div className='rounded-full bg-white flex flex-col justify-center h-[5.25rem] w-[5.25rem] text-center'>
                <h5 className='text-primaryBlue font-extrabold text-[1.7rem]'>1300</h5>
                <p className='text-primaryBlue font-[500] text-[1.2rem]'>USD</p>
             </div>
            <h5 className='font-bold text-left text-[1.5rem]'>Monto mínimo<br />de inversión</h5>
          </div>
        </div>
        <Carousel images={images}/>
      
      </section>
    )
}


