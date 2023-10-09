import { motion } from 'framer-motion';

export const NovedadesCard = (props) => {

    // eslint-disable-next-line react/prop-types
    const { background, title, text, link } = props;
    return(
        <motion.div className='bg-white min-w-[18rem] max-w-[22rem] rounded-xl text-black pb-8'>
          <img src={background} alt="header" className='object-cover w-full rounded-t-xl' />
          <div className='px-4'>
            <h6 className='text-[1.2rem] font-medium pt-3'>{title}</h6>
            <p className='text-[0.84rem] py-3'>{text}</p>
            <a href={link} className='underline text-primaryBlue text-[1rem]'>Leer artículo completo</a>
          </div>
        </motion.div>
    )
}