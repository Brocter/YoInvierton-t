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
    <section className='text-center pt-[2rem] pb-[8rem]'>
      <ScrollTrigger onEnter={handleScrollEnter} onExit={handleScrollExit}>
        <div className='pb-2'>
          <h2 className='font-extrabold text-[4.5rem] text-primaryBlue'>
            
            {counterOn ? <CountUp start={0} end={6} duration={3} delay={0} /> : 0}
          </h2>
          <h6 className='text-black text-[1.2rem] font-[600] mt-[-1rem]'>AÑOS<br />CONSTRUYENDO</h6>
        </div>
        <div className='py-2'>
          <h2 className='font-extrabold text-[4.5rem] text-primaryBlue'>
            
            {counterOn ? <CountUp start={0} end={78} duration={3} delay={0} /> : 0}
          </h2>
          <h6 className='text-black text-[1.2rem] font-[600] mt-[-1rem]'>PROYECTOS<br />ENTREGADOS</h6>
        </div>
        <div className='pt-2'>
          <h2 className='font-extrabold text-[4.5rem] text-primaryBlue'>
            
            {counterOn ? <CountUp start={0} end={165} duration={3} delay={0} /> : 0}
          </h2>
          <h6 className='text-black text-[1.2rem] font-[600] mt-[-1rem]'>INVERSIONISTAS</h6>
        </div>
      </ScrollTrigger>
    </section>
  );
};
