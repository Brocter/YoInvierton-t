import React, { useState, useEffect } from "react";
import { retrieveImage, deleteInvestment } from "../../utils/firebase";
import editIcon from "../../assets/icons/Edit.png";
import crossIcon from "../../assets/icons/Cross.png";

const SimplifiedCard = ({ piso, unidad, status, imgUrl, setSelectedCard }) => {
  const [image, setImage] = useState();
  const [investmentName, setInvestmentName] = useState();

  //Bring Investment Image from Storage
  useEffect(() => {
    setImage(imgUrl);
    setInvestmentName(piso + unidad);
  }, []);

  const handleDelete = ()=> {
    deleteInvestment(investmentName, imgUrl)
  }

  return (
    <div
      className="flex flex-row justify-between border border-text-gray-900 shadow-lg shadow-primaryLightBlue w-full h-[10rem] rounded-sm p-3 bg-cover bg-center mt-5"
      style={{ backgroundImage: `url('${image}')`}}
    >
      <div className="flex flex-col">
        <h1 className="text-[1.5rem] font-bold text-white">{piso + unidad}</h1>
        <h2 className="text-[1rem] font-medium text-white">{status}</h2>
      </div>
      <div className="flex flex-row gap-2 justify-center">
      <img
          onClick={(e) => setSelectedCard(piso+unidad)}
          src={editIcon}
          style={{ width: "33px", height: "33px", marginTop:"3px" }}
        />
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
