import { OportunidadesCardCarousel } from "../OportunidadesCardCarousel/OportunidadesCardCarousel";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import background from './../../assets/edificioBackground.png';
import NextArrowButton from "../NextArrowButton/NextArrowButton";
import PrevArrowButton from "../PrevArrowButton/PrevArrowButton";

const range = [-1, 0, 1];

const cardData = [
  {
    background,
    departamento: "Departamento 7°A",
    rendimiento: "10%",
    minimoInversion: "1.000,00",
    porcentaje: "58.3%",
    totalInvertido: "59.600",
    inversionMax: "102.216",
  },
  {
    background,
    departamento: "Departamento 7°E",
    rendimiento: "10%",
    minimoInversion: "1.000,00",
    porcentaje: "0%",
    totalInvertido: "0%",
    inversionMax: "72.600",
  },
  {
    background,
    departamento: "Departamento 9°C",
    rendimiento: "22%",
    minimoInversion: "1.000,00",
    porcentaje: "14.7%",
    totalInvertido: "11876",
    inversionMax: "80.769",
  }
];

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
      <motion.div className="px-[5%] relative overflow-hidden flex gap-4">
      <motion.div ref={containerRef} className='relative w-[100%] h-[clamp(42rem,160vw,60rem)]'>
        {range.map((rangeValue) => {
        return (
          <OportunidadesCardCarousel
            key={rangeValue + index}
            x={x}
            onDragEnd={handleEndDrag}
            index={rangeValue + index}
            active={rangeValue === 0}
            cardData={cardData[Math.abs(index % 3)]}
          />
        );
      })}
      
      </motion.div>
      <NextArrowButton background="primaryBlue" arrowColor="white" onClick={handleNextClick} />
      <PrevArrowButton background="primaryBlue" arrowColor="white" onClick={handlePrevClick} />
      </motion.div>
  );
};

export default OportunidadesCarousel;