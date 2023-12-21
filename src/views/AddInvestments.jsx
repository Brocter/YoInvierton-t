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

  useEffect(() => {
    //Receives Promise and awaits for resolution.
    //Remember: All async functions necessarily returns a Promise.
    retrieveInvestments(setAllInvestments)
  }, []);

  const handleInputChange = (data, field) => {
    console.log("IMG", investmentImg)
    if (field == "file") {
      const file = data.target.files[0];
      setInvestmentImg(file);
    } else {
      console.log("field changed", data);
      setInvestmentData((prevData) => ({
        ...prevData,
        [field]: data,
      }));
    }
  };

  const submitForm = () => {

    console.log("FORM DATA", investmentData)
    console.log("IMG DATA",investmentImg )

    //Image uploaded and then set into the investment object
    uploadImage(investmentImg).then((url) => {

      //Remember that React State Updates are asynchronous so you should use local variables if one is ought to be used after.
      const updatedInvestmentData = {
        ...investmentData,
        img: url,
      };

      setInvestmentData(updatedInvestmentData)

      //ID is generated from investment floor and number.
      const uniqueId = updatedInvestmentData["piso"] + updatedInvestmentData["unidad"];

      //Investment entry is created in the DB.
      createInvestment(updatedInvestmentData, uniqueId);
    });
  };

  const dropdownDataType = [
    {
      value: "1 AMBIENTE",
      text: "1 AMBIENTE",
    },
    {
      value: "2 AMBIENTE",
      text: "2 AMBIENTE",
    },
  ];

  const dropdownDataStatus = [
    {
      value: "En Obra, Entrega Febrero",
      text: "En Obra, Entrega Febrero",
    },
  ];

  return (
    <section id="main" className="flex flex-row p-8  h-[100vh] w-full">
      <div className="w-[50%] p-10 pr-30">
        <div className="mt-4">
          <InputForm
            height={"1.5"}
            placeholder={"Piso"}
            onChange={(e) => handleInputChange(e.target.value, "piso")}
          />
        </div>
        <div className="mt-4">
          <InputForm
            height={"1.5"}
            placeholder={"Unidad"}
            onChange={(e) => handleInputChange(e.target.value, "unidad")}
          />
        </div>
        <div className="mt-4">
          <Dropdown
            options={dropdownDataType}
            handleInputChange={handleInputChange}
            parameter={"type"}
          />
        </div>
        <div className="mt-4">
          <InputForm
            height={"1.5"}
            placeholder={"M2 Totales"}
            onChange={(e) => handleInputChange(parseInt(e.target.value), "m2Totales")}
          />
        </div>
        <div className="mt-4">
          <Dropdown
            options={dropdownDataStatus}
            onChange={handleInputChange}
            parameter={"status"}
          />
        </div>
        <div className="mt-4">
          <InputForm
            height={"1.5"}
            placeholder={"Inversión Necesaria"}
            onChange={(e) => handleInputChange(parseInt(e.target.value), "necesaria")}
          />
        </div>
        <div className="mt-4">
          <InputForm
            height={"1.5"}
            placeholder={"Inversión Minima"}
            onChange={(e) => handleInputChange(parseInt(e.target.value), "minima")}
          />
        </div>
        <div className="mt-4 mb-4">
          <InputForm
            height={"1.5"}
            placeholder={"Inversión Comprometida"}
            onChange={(e) => handleInputChange(parseInt(e.target.value), "comprometida")}
          />
        </div>
        <div className="mt-4">
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            onChange={(e) => handleInputChange(e, "file")}
          />
        </div>
        <button
          className="w-[11rem] bg-primaryBlue rounded-xl py-2 justify-center text-white text-[1.2rem] font-medium mt-4"
          onClick={() => submitForm()}
        >
          Cargar Inversión
        </button>
      </div>
      <div className="w-[50%] p-10 overflow-scroll">
      {allInvestments != undefined && Object.values(allInvestments).map((item, index)=> (
        <SimplifiedCard key={index} piso={item.piso} unidad={item.unidad} status={item.status} imgUrl={item.img?.path_}/>
      ))}
      </div>
    </section>
  );
};

export default UploadInvestments;
