import testimonial  from './../../assets/testimonialJuan.png'

export const TestimonialCard = () => {
    return(
        <div className='text-center px-4'>
          <img className="mx-auto" src={testimonial} alt="profileTestimonial" />
          <h4>Juan Pérez</h4>
          <p>“Es el tipo de inversión que me proteje de la crisis y de la inflación”</p>
        </div>
    )
}