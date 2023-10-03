import carouselImage from './../../assets/Imagen.png';
import { useState } from 'react';

export const Carousel = () => {
 return(
    <div className='bg-image h-[120%]'>
        <img className='h-[100%] w-[100%]' src={carouselImage} alt="carousel" />
    </div>
 )
}