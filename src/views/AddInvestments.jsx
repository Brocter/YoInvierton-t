import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import Dropdown from "../components/Dropdown/Dropdown";
import {
  uploadImage,
  createInvestment,
  retrieveInvestments,
} from "../utils/firebase";
import SimplifiedCard from "../components/SimplifiedCard/SimplifiedCard";

const UploadInvestments = () => {
  const navigate = useNavigate();
  const [investmentData, setInvestmentData] = useState({
    type: "1 AMB",
    status: "En Obra, Entrega Febrero",
    estimatedProfit: "10%",
  });
  const [investmentImg, setInvestmentImg] = useState();
  const [allInvestments, setAllInvestments] = useState([]);
  const [selectedCard, setSelectedCard] = useState();

  useEffect(() => {
    //Receives Promise and awaits for resolution.
    //Remember: All async functions necessarily returns a Promise.
    retrieveInvestments(setAllInvestments);
  }, []);

  useEffect(() => {
    console.log("card selected", allInvestments[selectedCard]);
    if (selectedCard != undefined){
      setInvestmentData(allInvestments[selectedCard]);
    } else {
      console.log("xddd")
      setInvestmentData({
        piso: "",
        unidad:"",
        minima: 0,
        necesaria: 0,
        m2Totales:0,
        comprometida: 0,
        type: "1 AMB",
        status: "En Obra, Entrega Febrero",
        estimatedProfit: "10%",
      });
    }
  }, [selectedCard]);

  const handleInputChange = (data, field) => {
    console.log("IMG", investmentImg);
    if (field == "file") {
      const file = data.target.files[0];
      setInvestmentImg(file); // Set the image URL directly
      setInvestmentData((prevData) => ({
        ...prevData,
        "img": URL.createObjectURL(file),
      }));
    } else {
      console.log("field changed", data);
      setInvestmentData((prevData) => ({
        ...prevData,
        [field]: data,
      }));
    }
  };

  const submitForm = () => {
    console.log("FORM DATA", investmentData);
    console.log("IMG DATA", investmentImg);

    //Image uploaded and then set into the investment object
    uploadImage(investmentImg).then((url) => {
      //Remember that React State Updates are asynchronous so you should use local variables if one is ought to be used after.
      const updatedInvestmentData = {
        ...investmentData,
        img: url,
      };

      setInvestmentData(updatedInvestmentData);

      //ID is generated from investment floor and number.
      const uniqueId = updatedInvestmentData["piso"] + updatedInvestmentData["unidad"];

      //Investment entry is created in the DB.
      createInvestment(updatedInvestmentData, uniqueId);
      setSelectedCard()
    });
  };

  const dropdownDataType = ["1 AMBIENTE", "2 AMBIENTE"];

  const dropdownDataStatus = ["En Obra, Entrega Febrero"];

  return (
    <section id="main" className="flex flex-row p-8  h-[100vh] w-full">
      <div className="w-[50%] p-10 pr-30">
      {!selectedCard && <p className="font-bold text-[clamp(2.4rem,5vw,3.8rem)] text-primaryBlue mb-4">
          Agregar Propiedad
        </p>}
        {selectedCard && <div>
        <div onClick={() => setSelectedCard()} className="cursor-default font-medium text-[1.2rem] text-gray-500"><p>Regresar</p></div>
        <p className="font-bold text-[clamp(2.4rem,5vw,3.8rem)] text-primaryBlue mb-4">
        Editando: {selectedCard}
      </p>
      </div>
        }
        <div className="mt-4">
          <InputForm
            height={"1.5"}
            placeholder={"Piso"}
            onChange={(e) => handleInputChange(e.target.value, "piso")}
            value={investmentData?.["piso"]}
          />
        </div>
        <div className="mt-4">
          <InputForm
            height={"1.5"}
            placeholder={"Unidad"}
            onChange={(e) => handleInputChange(e.target.value, "unidad")}
            value={investmentData?.["unidad"]}
          />
        </div>
        <div className="mt-4">
          <Dropdown
            options={dropdownDataType}
            onChange={handleInputChange}
            parameter={"type"}
            selected={investmentData?.["type"]}
          />
        </div>
        <div className="mt-4">
          <InputForm
            height={"1.5"}
            placeholder={"M2 Totales"}
            onChange={(e) =>
              handleInputChange(parseInt(e.target.value), "m2Totales")
            }
            value={investmentData?.["m2Totales"]}
          />
        </div>
        <div className="mt-4">
          <Dropdown
            options={dropdownDataStatus}
            onChange={handleInputChange}
            parameter={"status"}
            selected={investmentData?.["type"]}
          />
        </div>
        <div className="mt-4">
          <InputForm
            height={"1.5"}
            placeholder={"Inversión Necesaria"}
            onChange={(e) =>
              handleInputChange(parseInt(e.target.value), "necesaria")
            }
            value={investmentData?.["necesaria"]}
          />
        </div>
        <div className="mt-4">
          <InputForm
            height={"1.5"}
            placeholder={"Inversión Minima"}
            onChange={(e) =>
              handleInputChange(parseInt(e.target.value), "minima")
            }
            value={investmentData?.["minima"]}
          />
        </div>
        <div className="mt-4 mb-4">
          <InputForm
            height={"1.5"}
            placeholder={"Inversión Comprometida"}
            onChange={(e) =>
              handleInputChange(parseInt(e.target.value), "comprometida")
            }
            value={investmentData?.["comprometida"]}
          />
        </div>
        <div className="mt-4">
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            onChange={(e) => handleInputChange(e, "file")}
          />
          {investmentData && investmentData["img"] && <div id="showcaseImg" className="w-[50%] mt-5 rounded-sm " style={{ backgroundImage: `url(${investmentImg})` }}>
            <img src={investmentData["img"]}/>
          </div>}
        </div>
        <button
          className="w-[11rem] bg-primaryBlue rounded-xl mt-10 mb-20 py-2 justify-center text-white text-[1.2rem] font-medium mt-4"
          onClick={() => submitForm()}
        >
          {!selectedCard && <span>Cargar Inversión</span>}
          {selectedCard &&<span>Actualizar</span>}
        </button>
      </div>
      <div className="w-[50%] p-10 overflow-scroll">
        {allInvestments != undefined &&
          Object.values(allInvestments).map((item, index) => (
            <SimplifiedCard
              key={item.img}
              piso={item.piso}
              unidad={item.unidad}
              status={item.status}
              imgUrl={item.img}
              setSelectedCard={setSelectedCard}
            />
          ))}
      </div>
    </section>
  );
};

export default UploadInvestments;
