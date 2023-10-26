import { OportunidadesCard } from "../OportunidadesCard/OportunidadesCard";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import background from './../../assets/edificioBackground.png';
import NextArrowButton from "../NextArrowButton/NextArrowButton";
import PrevArrowButton from "../PrevArrowButton/PrevArrowButton";

const range = [-1, 0, 1];

const cardData = {
  background,
  departamento: "Departamento 9°",
  rendimiento: "8%",
  minimoInversion: "1.300,00",
  porcentaje: "15%",
  totalInvertido: "1000",
  inversionMax: "50.000",
};

const transition = {
  type: "spring",
  bounce: 0,
};

const OportunidadesCarousel = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);
  const clientWidth = containerRef.current?.clientWidth || 0;

  const handleEndDrag = (e, dragProps) => {
    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, calculateNewX(), transition);
      return;
    }

    if (offset.x > clientWidth / 4) {
      setIndex(index - 1);
    } else if (offset.x < -clientWidth / 4) {
      setIndex(index + 1);
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  const handleNextClick = () => {
    return setIndex(index + 1);
  }

  const handlePrevClick = () => {
    return setIndex(index - 1);
  }


  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index]);


  return (
      <>
      <motion.div ref={containerRef} className='relative w-[100%] translate-x-[6%] h-[42rem]'>
        {range.map((rangeValue) => {
        return (
          <OportunidadesCard
            key={rangeValue + index}
            x={x}
            onDragEnd={handleEndDrag}
            index={rangeValue + index}
            active={rangeValue === 0}
            cardData={cardData}
          />
        );
      })}
      <NextArrowButton background="primaryBlue" arrowColor="white" onClick={handleNextClick} />
      <PrevArrowButton background="primaryBlue" arrowColor="white" onClick={handlePrevClick} />
      </motion.div>
      
      </>
  );
};

export default OportunidadesCarousel;