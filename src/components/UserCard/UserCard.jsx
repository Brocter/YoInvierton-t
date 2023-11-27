import arrowDown from "../../assets/icons/arrow_down.png";
import React, { useState, useEffect } from "react";
import { OportunidadesCard } from "../OportunidadesCard/OportunidadesCard";
import background from "../../assets/edificioBackground.png";

const UserCard = ({ handleCardSelected, index, cardSelected }) => {
  const [cardState, setcardState] = useState("closed");

  useEffect(()=> {
    if (index != cardSelected){
      setcardState("closed");
    }
  }, [cardSelected])

  const handleClick = (e) => {
    handleCardSelected(index);
    if (cardState == "closed") {
      setcardState("open");
      handleCardSelected(index);
    } else {
      setcardState("closed");
      handleCardSelected("none");
    }
  };

  const [cardData, setcardData] = useState({
    background,
    departamento: "Departamento 9°",
    rendimiento: "8%",
    minimoInversion: "1.300,00",
    porcentaje: "15%",
    totalInvertido: "1000",
    inversionMax: "50.000",
    type:"admin_card"
  });

  return (
    <div className="flex-col">
      <div
        className="flex flex-row w-full h-auto border-b border-100-gray p-4 pl-0 justify-between items-center"
        onClick={handleClick}
      >
        <div>
          <div>
            <p className="text-primaryBlue font-bold">Nombre Completo</p>
            <p>DNI: 41.458.988</p>
          </div>

          <div className="mt-2">
            <p>1000.00 USD</p>
          </div>
        </div>
        <div>
          <div className={`ml-[-2rem] mt-[0.4rem] ${cardState == "open" ? "rotate-90" : ""}`}>
            <img src={arrowDown} width="50rem" alt="Arrow Down" />
          </div>
        </div>
      </div>
      {cardState == "open" && (
        <div
          id="list"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {Array(7)
            .fill(true)
            .map((item, index) => (
              <OportunidadesCard key={index} cardData={cardData} />
            ))}
        </div>
      )}
    </div>
  );
};

export default UserCard;
