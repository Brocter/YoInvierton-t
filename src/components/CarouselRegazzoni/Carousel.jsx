import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import NextArrowButton from "../NextArrowButton/NextArrowButton";
import PrevArrowButton from "../PrevArrowButton/PrevArrowButton";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Carousel = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDotClick = (index) => {
    // Calculate the direction to navigate to the clicked dot
    const newDirection = index > imageIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  return (
    <div className="mx-auto py-[clamp(11rem,38vw,20rem)] flex relative justify-center items-center w-[100vw] lg:w-[35vw] h-[50vh] max-w-[58rem]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute max-h-[30rem] cursor-grab md:rounded-2xl"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 150, damping: 30},
            opacity: { duration: 0.6 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <NextArrowButton onClick={() => paginate(1)} background="white" arrowColor="black"/>
      <PrevArrowButton onClick={() => paginate(-1)} background="white" arrowColor="black"/>
      <div className="flex gap-5 justify-center items-center mt-[12rem] z-10 py-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 cursor-pointer rounded-full p-1 h-2 bg-white hover:p-2 hover:duration-[400ms] ${imageIndex === index ?  "p-2 duration-[400ms]" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
