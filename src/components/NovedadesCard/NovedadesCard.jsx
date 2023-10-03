import background from './../../assets/edificioBackground.png';

export const NovedadesCard = () => {
    return(
        <div className='bg-white'>
          <img src={background} alt="" />
          <div className='px-4'>
            <h6>Las cosas se mueven rápido en Jardin Regazzoni</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...</p>
            <a href={new URL("https://sanjeepan23.medium.com")}>Leer artículo completo</a>
          </div>
        </div>
    )
}