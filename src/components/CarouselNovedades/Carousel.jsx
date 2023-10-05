import { React, useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import { NovedadesCard } from '../NovedadesCard/NovedadesCard';

export default function Carousel() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);

  return (
    <motion.div ref={carousel} className='cursor-grab overflow-hidden'>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}>
        <div className='flex gap-4'>
        <NovedadesCard/>
        <NovedadesCard/>
        <NovedadesCard/>
        </div>
      </motion.div>
    </motion.div>
  );
}