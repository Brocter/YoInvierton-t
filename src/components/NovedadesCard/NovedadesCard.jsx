import background from './../../assets/avanceObra.png';
import { motion } from 'framer-motion';

export const NovedadesCard = () => {
    return(
        <motion.div className='bg-white min-w-[18rem] max-w-[22rem] rounded-xl text-black pb-8'>
          <img src={background} alt="header" className='object-cover w-full rounded-t-xl' />
          <div className='px-4'>
            <h6 className='text-[1.2rem] font-medium pt-3'>Las cosas se mueven rápido en Jardin Regazzoni</h6>
            <p className='text-[0.84rem] py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...</p>
            <a href={new URL("https://medium.com")} className='underline text-primaryBlue text-[1rem]'>Leer artículo completo</a>
          </div>
        </motion.div>
    )
}