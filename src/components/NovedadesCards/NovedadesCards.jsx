import { NovedadesCard } from "../NovedadesCard/NovedadesCard"

const NovedadesCards = ({posts}) =>{
    const post = posts[0]
    const cardData = {
      background: post.background? post.background: background,
      title: post.title? post.title: "Loading...",
      text: post.summary ? post.summary : "Loading...",
      link: post.link ? post.link : "https://medium.com/"
    }
    return(
        <div className='hidden md:block px-[16%] '>
        {[...Array(3)].map((_, index) => (
                <NovedadesCard key={index} {...cardData} />
              ))}
        </div>
    )
}

export default NovedadesCards