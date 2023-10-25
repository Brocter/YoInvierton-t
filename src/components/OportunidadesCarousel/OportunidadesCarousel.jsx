import { OportunidadesCard } from "../OportunidadesCard/OportunidadesCard";
import { useEffect,useState, useRef } from "react";
import { motion } from "framer-motion";
import background from './../../assets/edificioBackground.png';
import NextArrowButton from "../NextArrowButton/NextArrowButton";
import PrevArrowButton from "../PrevArrowButton/PrevArrowButton";

const cardData = {
    background,
    departamento: "Departamento 9°",
    rendimiento: "8%",
    minimoInversion: "1.300,00",
    porcentaje: "15%",
    totalInvertido: "1000",
    inversionMax:"50.000"
  }
  


const OportunidadesCarousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
  
    useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const handleNextClick = () => {
      
    };
  
    const handlePrevClick = () => {
      
    };

    return(
        <motion.div ref={carousel} whileTap={{cursor:"grabbing"}} className='overflow-hidden pl-4 relative'>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width}}>
          <motion.div className='flex gap-10 w-full py-5'>
            {[...Array(3)].map((_, index) => (
              <OportunidadesCard key={index} {...cardData} />
            ))}
            
          </motion.div>
          
        </motion.div>
        <NextArrowButton background="primaryBlue" arrowColor="white" onClick={handleNextClick}/>
        <PrevArrowButton background="primaryBlue" arrowColor="white" onClick={handlePrevClick}/>
        
      </motion.div>
    )
}

export default OportunidadesCarousel;