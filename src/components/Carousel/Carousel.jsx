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
    <div className="m-auto flex relative justify-center items-center w-[100vw] h-[50vh] max-w-[40rem]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute max-h-[22rem] cursor-grab"
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
      <div className="top-[calc(50%-20px)] absolute right-3 bg-white rounded-full flex justify-center items-center w-12 h-12 cursor-pointer font-bold z-[2] text-[1.2rem]" onClick={() => paginate(1)}>
        {"►"}
      </div>
      <div className="top-[calc(50%-20px)] absolute left-3 bg-white rounded-full flex justify-center items-center w-12 h-12 cursor-pointer font-bold z-[2] text-[1.2rem]" onClick={() => paginate(-1)}>
        {"◄"}
      </div>
      <div className="flex gap-5 justify-center mt-[13rem] z-10 py-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 cursor-pointer rounded-full h-2 bg-white ${imageIndex === index ? "bg-blue-400" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
