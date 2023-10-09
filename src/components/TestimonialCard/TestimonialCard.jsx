import testimonial  from './../../assets/testimonialJuan.png'

export const TestimonialCard = () => {
    return(
        <div className='text-center px-10 py-10 border rounded-lg border-primaryLightBlue shadow-lg shadow-primaryLightBlue w-full'>
          <img className="mx-auto" src={testimonial} alt="profileTestimonial" />
          <h4 className='font-[700] text-[1.5rem] py-4'>Juan Pérez</h4>
          <p className='text-[1.25rem]'>“Es el tipo de inversión que me proteje de la crisis y de la inflación”</p>
        </div>
    )
}