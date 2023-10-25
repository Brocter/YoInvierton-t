import CarouselNovedades from "../CarouselNovedades/CarouselNovedades"

export const Section5 = () => {
    return(
        <section className='bg-white mx-auto'>
        <div className='mb-[-0.1rem]  max-h-[10rem] pointer-events-none'>
          <svg style={{ pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 375 81" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L20.9375 1.6875C41.5625 3.375 83.4375 6.75 125 16.875C166.562 27 208.438 43.875 250 42.1875C291.562 40.5 333.438 20.25 354.062 10.125L375 0V81H354.062C333.438 81 291.562 81 250 81C208.438 81 166.562 81 125 81C83.4375 81 41.5625 81 20.9375 81H0V0Z" fill="#4886F8"/>
          </svg>
        </div>
        <div className='bg-primaryBlue py-[2rem]'>
        <div className='bg-primaryBlue py-[2rem] mx-auto px-6'>
        <h2 className='text-white text-[3rem] font-[600] leading-[1.2]  tracking-[-0.08rem]'>Enterate de las <b className="font-extrabold">novedades</b></h2>
        <h6 className='text-white font-[500] text-[1.5rem] leading-[1.2] py-6'>Sumate a nuestro <b className='underline'>blog</b> para no perderte de ningún avance</h6>
        </div>
        <div className=" bg-primaryBlue">
        <CarouselNovedades/>
        </div>
        </div>
        
        <div className='mt-[-0.1rem]  max-h-[10rem] pointer-events-none'>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 375 101" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 101H15.625C31.25 101 62.5 101 93.75 99.1296C125 97.2593 156.25 93.5185 187.5 86.037C218.75 78.5555 250 67.3333 281.25 63.5926C312.5 59.8518 343.75 63.5926 359.375 65.463L375 67.3333V0H359.375C343.75 0 312.5 0 281.25 0C250 0 218.75 0 187.5 0C156.25 0 125 0 93.75 0C62.5 0 31.25 0 15.625 0H0V101Z" fill="#4886F8"/>
        </svg>
        </div>
      </section>
    )
}