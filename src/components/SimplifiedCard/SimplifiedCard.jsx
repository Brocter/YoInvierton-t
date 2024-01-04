import React, { useState, useEffect } from "react";
import { retrieveImage, deleteInvestment } from "../../utils/firebase";
import crossIcon from "../../assets/icons/Cross.png";

const SimplifiedCard = ({ piso, unidad, status, imgUrl, setSelectedCard }) => {
  const [image, setImage] = useState();
  const [investmentName, setInvestmentName] = useState();

  //Bring Investment Image from Storage
  useEffect(() => {
    console.log("soy una tarjeta uwu");
    retrieveImage(imgUrl).then((url) => {
      console.log("download url", url);
      setImage(url);
    });
    setInvestmentName(piso + unidad);
  }, []);

  const handleDelete = ()=> {
    deleteInvestment(investmentName, imgUrl)
  }

  return (
    <div
      className="flex flex-row justify-between border border-text-gray-900 shadow-lg shadow-primaryLightBlue w-full h-[10rem] rounded-sm p-3 bg-cover bg-center mt-5"
      style={{ backgroundImage: `url('${image}')` }}
      onClick={(e) => setSelectedCard(piso+unidad)}
    >
      <div className="flex flex-col">
        <h1 className="text-[1.5rem] font-bold text-white">{piso + unidad}</h1>
        <h2 className="text-[1rem] font-medium text-white">{status}</h2>
      </div>
      <div>
        <img
          onClick={() => handleDelete()}
          src={crossIcon}
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
};

export default SimplifiedCard;
