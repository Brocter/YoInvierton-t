import { OportunidadesCard } from "../OportunidadesCard/OportunidadesCard";
import background from "./../../assets/edificioBackground.png";

const cardData = [
  {
    background,
    departamento: "Departamento 7°A",
    rendimiento: "10%",
    minimoInversion: "1.000,00",
    porcentaje: "58.3%",
    totalInvertido: "59.600",
    inversionMax: "102.216",
  },
  {
    background,
    departamento: "Departamento 7°E",
    rendimiento: "10%",
    minimoInversion: "1.000,00",
    porcentaje: "0%",
    totalInvertido: "0%",
    inversionMax: "72.600",
  },
  {
    background,
    departamento: "Departamento 9°C",
    rendimiento: "22%",
    minimoInversion: "1.000,00",
    porcentaje: "14.7%",
    totalInvertido: "11876",
    inversionMax: "80.769",
  }
];

const OportunidadesCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-[80rem] mx-auto xl:gap-6">
      {[...Array(3)].map((_, i) => (
        <OportunidadesCard key={i} cardData={cardData[i]} />
      ))}
    </div>
  );
};

export default OportunidadesCards;
