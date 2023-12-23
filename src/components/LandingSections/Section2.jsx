import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const Section2 = () => {
  const [counterOn, setCounterOn] = useState(false);

  const handleScrollEnter = () => {
    if (!counterOn) {
      setCounterOn(true);
    }
  };

  const handleScrollExit = () => {
    return setCounterOn(false)
  };

  return (
    <section className='text-center pt-[2rem] pb-[clamp(8rem,15vw,16rem)] lg:pt-[2rem] xl:pt-[clamp(10rem,18vw,10rem)]'>
      <ScrollTrigger onEnter={handleScrollEnter} onExit={handleScrollExit}>
        <div className="lg:flex justify-around">
        <div className='pb-2'>
          <h2 className='font-extrabold text-[clamp(4.5rem,10vw,6rem)] text-primaryBlue xl:text-[clamp(6rem,6vw,9rem)]'>
            
            {counterOn ? <CountUp start={0} end={6} duration={3} delay={0} /> : 0}
          </h2>
          <h6 className='text-black text-[clamp(1.2rem,2.2vw,1.5rem)] font-[700] mt-[-1rem] xl:text-[clamp(1.5rem,1.5vw,2rem)]'>AÑOS<br />CONSTRUYENDO</h6>
        </div>
        <div className='py-2'>
          <h2 className='font-extrabold text-[clamp(4.5rem,10vw,6rem)] text-primaryBlue xl:text-[clamp(6rem,6vw,9rem)]'>
            
            {counterOn ? <CountUp start={0} end={78} duration={3} delay={0} /> : 0}
          </h2>
          <h6 className='text-black text-[clamp(1.2rem,2.2vw,1.5rem)] font-[700] mt-[-1rem] xl:text-[clamp(1.5rem,1.5vw,2rem)]'>PROYECTOS<br />ENTREGADOS</h6>
        </div>
        <div className='pt-2'>
          <h2 className='font-extrabold text-[clamp(4.5rem,10vw,6rem)] text-primaryBlue xl:text-[clamp(6rem,6vw,9rem)]'>
            
            {counterOn ? <CountUp start={0} end={165} duration={3} delay={0} /> : 0}
          </h2>
          <h6 className='text-black text-[clamp(1.2rem,2.2vw,1.5rem)] font-[700] mt-[-1rem] xl:text-[clamp(1.5rem,1.5vw,2rem)]'>INVERSIONISTAS</h6>
        </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};
