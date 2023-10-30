import { useEffect, useState } from "react";
import CarouselNovedades from "../CarouselNovedades/CarouselNovedades"
import NovedadesCards from "../NovedadesCards/NovedadesCards";

export const Section5 = () => {
  const [posts,setPosts] = useState([])

  const getPosts = async () =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "get",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch("https://v1.nocodeapi.com/brocter/medium/RAibqBljDpWVfJgN", requestOptions)
      const result = await response.json();
      result.forEach((post) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(post.content, 'text/html');
        const firstImage = htmlDoc.querySelector('img');
        if (firstImage) {
          post.background = firstImage.getAttribute('src');
        }
        const thirdP = htmlDoc.querySelectorAll("p")[2].textContent; // Get the text content of the third <p> tag
      const truncatedThirdP =
        thirdP.slice(0, 179) + (thirdP.length > 179 ? "..." : "");

      post.summary = truncatedThirdP;
      });
      return setPosts(result);
    } catch (error) {
      console.log(error);
  }
  }
  useEffect(() => {
    getPosts()
  },[]);
  
  
      
    return(
        <section className='bg-white mx-auto'>
        <div className='mb-[-0.1rem]  max-h-[10rem] pointer-events-none md:hidden'>
          <svg style={{ pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 375 81" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L20.9375 1.6875C41.5625 3.375 83.4375 6.75 125 16.875C166.562 27 208.438 43.875 250 42.1875C291.562 40.5 333.438 20.25 354.062 10.125L375 0V81H354.062C333.438 81 291.562 81 250 81C208.438 81 166.562 81 125 81C83.4375 81 41.5625 81 20.9375 81H0V0Z" fill="#4886F8"/>
          </svg>
        </div>
        <div className="hidden md:block mb-[-2rem] max-h-[10rem]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 228" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0L80.4 4.75C159.6 9.5 320.4 19 480 47.5C639.598 76 800.402 123.5 960 118.75C1119.6 114 1280.4 57 1359.6 28.5L1440 0V228H1359.6C1280.4 228 1119.6 228 960 228C800.402 228 639.598 228 480 228C320.4 228 159.6 228 80.4 228H0V0Z" fill="#4886F8"/>
        </svg>
        </div>
        <div className='bg-primaryBlue py-[2rem] pt-10 lg:mt-10'>
        <div className='bg-primaryBlue py-[2rem] mx-auto px-6'>
        <h2 className='text-white text-[clamp(3rem,4.2vw,3.6rem)] font-[600] leading-[1.2]  tracking-[-0.08rem] md:text-center'>Enterate de las <b className="font-extrabold">novedades</b></h2>
        <h6 className='text-white font-[500] text-[clamp(1.5rem,2vw,1.75rem)] leading-[1.2] py-6  md:text-center'>Sumate a nuestro <b className='underline'>blog</b> y no te pierdas de ningún avance</h6>
        </div>
        <div className=" bg-primaryBlue mx-auto md:hidden">
        {posts.length > 0 ? <CarouselNovedades posts={posts} /> : null}
        </div>
        <div className=" bg-primaryBlue mx-auto hidden md:block">
        {posts.length > 0 ? <NovedadesCards posts={posts} /> : null}
        </div>
        </div>
        <div className="justify-center bg-primaryBlue flex py-2">
        <a href={"https://medium.com/@yoinvierto"}>
        <button className="text-black flex w-[13rem] bg-white justify-center gap-2 rounded-md py-2 text-[1.25rem] items-center font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <g clipPath="url(#clip0_118_1266)">
        <path d="M24.5 11.8277C24.5 15.007 23.9672 17.586 23.3097 17.586C22.6522 17.586 22.1196 15.0077 22.1196 11.8277C22.1196 8.6477 22.6525 6.06946 23.3097 6.06946C23.967 6.06946 24.5 8.64747 24.5 11.8277Z" fill="black"/>
        <path d="M21.4628 11.8277C21.4628 15.377 19.9476 18.2554 18.0784 18.2554C16.2092 18.2554 14.694 15.377 14.694 11.8277C14.694 8.27834 16.209 5.3999 18.0782 5.3999C19.9473 5.3999 21.4626 8.27742 21.4626 11.8277" fill="black"/>
        <path d="M14.0374 11.8277C14.0374 15.5984 11.0069 18.6552 7.26884 18.6552C3.53073 18.6552 0.5 15.5977 0.5 11.8277C0.5 8.05767 3.5305 5 7.26884 5C11.0072 5 14.0374 8.05698 14.0374 11.8277Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_118_1266">
        <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
        </clipPath>
        </defs>
        </svg>VER MAS</button>
        </a>
        </div>
        <div className="hidden md:block pointer-events-none max-h-[10rem] mt-[-0.1rem]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 207" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M-1 207H59.0833C119.167 207 239.333 207 359.5 203.167C479.667 199.333 599.833 191.667 720 176.333C840.167 161 960.333 138 1080.5 130.333C1200.67 122.667 1320.83 130.333 1380.92 134.167L1441 138V0H1380.92C1320.83 0 1200.67 0 1080.5 0C960.333 0 840.167 0 720 0C599.833 0 479.667 0 359.5 0C239.333 0 119.167 0 59.0833 0H-1V207Z" fill="#4886F8"/>
        </svg>
        </div>
        <div className='mt-[-0.1rem]  max-h-[10rem] pointer-events-none md:hidden  w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 375 101" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 101H15.625C31.25 101 62.5 101 93.75 99.1296C125 97.2593 156.25 93.5185 187.5 86.037C218.75 78.5555 250 67.3333 281.25 63.5926C312.5 59.8518 343.75 63.5926 359.375 65.463L375 67.3333V0H359.375C343.75 0 312.5 0 281.25 0C250 0 218.75 0 187.5 0C156.25 0 125 0 93.75 0C62.5 0 31.25 0 15.625 0H0V101Z" fill="#4886F8"/>
        </svg>
        </div>
      </section>
    )
}