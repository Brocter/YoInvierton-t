import background from './../../assets/edificioBackground.png';

export const OportunidadesCard = () => {
    return(
        <div>
        <div>  
        <h5>Departamento 9°C</h5>
        <h6>Jardin Regazzoni</h6>
        </div>
        <p>Proyecto activo - Renta fija</p>
        <img src={background} alt="holis" />
        <div>
          <div className='flex'>
            <p>Rendimiento anual estimado:</p>
            <h6>8%</h6>
          </div>
          <div className='flex'>
            <p>Mínimo de inversión</p>
            <h6>U$S 1.300,00</h6>
          </div>
          <div>
            <p>Capital fondeado:   <b>U$S 1.111,11</b></p>
          
          <div className='bg-primaryLightBlue '>
            <div className='bg-primaryBlue w-[15%]'>
            </div>
          </div>
          <p>15% financiamiento alcanzado</p>
          </div>
          <button>QUIERO INVERTIR</button>
        </div>
      </div>
    )
}