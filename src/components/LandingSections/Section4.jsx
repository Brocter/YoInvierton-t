import { OportunidadesCard } from '../OportunidadesCard/OportunidadesCard';



export const Section4 = () => {
    return(
        <section className='py-[6rem] mx-auto px-6 text-black'>

        <h2 className='font-extrabold text-5xl tracking-[-0.08rem] leading-[1.2]'><span className='text-primaryBlue'>Oportunidades</span> de Inversión</h2>
        <h4 className='text-[1.5rem] font-bold leading-[1.2] py-6'>Crea tu cuenta. Elegi cuanto invertis. Crece en <b className='text-primaryBlue'>Dólares</b></h4>
        <OportunidadesCard/>
      
      </section>
    )
}

