import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';


export const NovedadesCard = (props) => {

  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function fetchMediumPosts() {
  //     try {
  //       const response = await fetch('https://api.medium.com/v1/users/{your_user_id}/posts', {
  //         headers: {
  //           'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your access token
  //         },
  //       });
  //       const data = await response.json();
  //       setPosts(data.data); // Assuming data.data contains your posts
  //     } catch (error) {
  //       console.error('Error fetching Medium posts', error);
  //     }
  //   }
    
  //   fetchMediumPosts();
  // }, []);
  
    // eslint-disable-next-line react/prop-types
    const { background, title, text, link } = props;
    return(
        <motion.div className='bg-white border border-[#A1A1A1] min-w-[18rem] max-w-[22rem] rounded-xl text-black pb-8 shadow-md shadow-[#A1A1A1]'>
          <img src={background} alt="header" className='object-cover w-full rounded-t-xl' draggable="false"/>
          <div className='px-4'>
            <h6 className='text-[1.2rem] font-medium pt-3'>{title}</h6>
            <p className='text-[0.84rem] py-3'>{text}</p>
            <a href={link} className='underline text-primaryBlue text-[1rem]'>Leer artículo completo</a>
          </div>
        </motion.div>
    )
}