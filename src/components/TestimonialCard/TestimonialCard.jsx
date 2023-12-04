
export const TestimonialCard = ({image,name,description}) => {
    return(
        <div className='text-center px-10 py-10 border rounded-lg border-primaryLightBlue shadow-lg shadow-primaryLightBlue w-full'>
          <img className="mx-auto" src={image} alt="profileTestimonial" />
          <h4 className='font-[700] text-[1.5rem] py-4'>{name}</h4>
          <p className='text-[1.25rem] italic'>{description}</p>
        </div>
    )
}