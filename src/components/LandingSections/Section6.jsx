import { TestimonialCard } from "../TestimonialCard/TestimonialCard"
import juan  from './../../assets/testimonialJuan.png'
import andrea  from './../../assets/testimonialAndrea.png'
import marcos  from './../../assets/testimonialMarcos.png'

export const Section6 = () => {
    return(
        <section className='py-[clamp(6rem,8vw,10rem)] px-4 mx-auto'>
        <h2 className="text-black text-[clamp(3rem,4.2vw,3.6rem)] font-[800] leading-[1.2] tracking-tighter md:text-center">¿Qué dicen de <span className="text-primaryBlue">nosotros?</span></h2>
        <div className="py-20 grid gap-10 lg:grid-cols-3 max-w-[80rem] mx-auto">
        <TestimonialCard image={juan} name={"Juan"} description={"Es el tipo de inversión que me protege de la crisis y de la inflación."}/>
        <TestimonialCard image={andrea} name={"Andrea"} description={"Invertir en ladrillos me da la seguridad que otras alternativas no."}/>
        <TestimonialCard image={marcos} name={"Marcos"} description={"Me parece una buena manera de ahorrar en USD sin complicarse."}/>
        </div>
      </section>
    )
}