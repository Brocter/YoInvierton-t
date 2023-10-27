import { OportunidadesCard } from "../OportunidadesCard/OportunidadesCard"
import background from './../../assets/edificioBackground.png';

const cardData = {
    background,
    departamento: "Departamento 9°",
    rendimiento: "8%",
    minimoInversion: "1.300,00",
    porcentaje: "15%",
    totalInvertido: "1000",
    inversionMax: "50.000",
  };

const OportunidadesCards = ()=>{
    return(
        <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
         <OportunidadesCard key={i} cardData={cardData}/>
            ))}
        </div>
    )
}

export default OportunidadesCards