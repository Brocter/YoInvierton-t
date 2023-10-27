import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';


export const NovedadesCard = (props) => {
  const { background, title, text, link } = props;
    return(
        <motion.div className='bg-white border border-[#A1A1A1] min-w-[18rem] rounded-xl text-black pb-8 shadow-md shadow-[#A1A1A1] md:flex md:pb-0 md:mb-6'>
          <img src={background} alt="header" className='object-cover w-full md:w-[30%] rounded-t-xl md:rounded-l-xl md:rounded-r-none' draggable="false"/>
          <div className='px-4 md:pb-4'>
            <h6 className='text-[1.2rem] font-medium pt-3'>{title}</h6>
            <p className='text-[0.84rem] py-3'>{text}</p>
            <a href={link} className='underline text-primaryBlue text-[1rem]'>Leer artículo completo</a>
          </div>         
        </motion.div>
    )
}