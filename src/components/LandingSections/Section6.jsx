import { TestimonialCard } from "../TestimonialCard/TestimonialCard"

export const Section6 = () => {
    return(
        <section className='py-[6rem] px-4 mx-auto'>
        <h2 className="text-black text-[3rem] font-[800] leading-[1.2] tracking-tighter md:text-center">¿Qué dicen de <span className="text-primaryBlue">nosotros?</span></h2>
        <div className="py-20 grid gap-10 lg:grid-cols-3">
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        </div>
      </section>
    )
}