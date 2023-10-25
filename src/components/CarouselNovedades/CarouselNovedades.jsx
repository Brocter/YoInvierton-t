import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { NovedadesCard } from '../NovedadesCard/NovedadesCard';
import background from './../../assets/avanceObra.png';

const cardData = {
  background,
  title: "Las cosas se mueven rápido en Jardin Regazzoni",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...",
  link: "https://medium.com"
}

export default function CarouselNovedades() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} whileTap={{cursor:"grabbing"}} className='overflow-hidden'>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}>
        <motion.div className='flex gap-4 w-full py-5 pl-4'>
          {[...Array(3)].map((_, index) => (
            <NovedadesCard key={index} {...cardData} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
