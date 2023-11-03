import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { NovedadesCard } from '../NovedadesCard/NovedadesCard';




export default function CarouselNovedades({posts}) {

  const post = posts[0]
  const cardData = {
    background: post.background? post.background: background,
    title: post.title? post.title: "Loading...",
    text: post.summary ? post.summary : "Loading...",
    link: post.link ? post.link : "https://medium.com/"
  }
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} whileTap={{cursor:"grabbing"}} className='overflow-hidden'>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}>
        <motion.div className='flex gap-4 w-full py-5 px-4 md:flex-col'>
          {[...Array(3)].map((_, index) => (
            <NovedadesCard key={index} {...cardData} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>

  );
}
