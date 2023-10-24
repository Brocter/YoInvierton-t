import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

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
    <div className="mx-auto py-[clamp(11rem,30vw,16rem)] flex relative justify-center items-center w-[100vw] h-[50vh] max-w-[40rem]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute max-h-[22rem] cursor-grab md:rounded-2xl"
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
      <div className="top-[calc(50%-20px)] absolute right-3 bg-white rounded-full flex justify-center items-center p-3 cursor-pointer font-bold z-[2] text-[1.2rem]" onClick={() => paginate(1)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15.2002 10.4899L13.2302 8.51993L10.0202 5.30993C9.34018 4.63993 8.18018 5.11993 8.18018 6.07993V12.3099V17.9199C8.18018 18.8799 9.34018 19.3599 10.0202 18.6799L15.2002 13.4999C16.0302 12.6799 16.0302 11.3199 15.2002 10.4899Z" fill="black"/>
      </svg>
      </div>
      <div className="top-[calc(50%-20px)] absolute left-3 bg-white rounded-full flex justify-center items-center p-3 cursor-pointer font-bold z-[2] text-[1.2rem]" onClick={() => paginate(-1)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13.9802 5.32024L10.7702 8.53024L8.80023 10.4902C7.97023 11.3202 7.97023 12.6702 8.80023 13.5002L13.9802 18.6802C14.6602 19.3602 15.8202 18.8702 15.8202 17.9202V12.3102V6.08024C15.8202 5.12024 14.6602 4.64024 13.9802 5.32024Z" fill="#292D32"/>
      </svg>
      </div>
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
