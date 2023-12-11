import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import Dropdown from "../components/Dropdown/Dropdown";
import {uploadImage} from "../utils/firebase"

const UploadInvestments = () => {
  const navigate = useNavigate();
  const [investmentData, setInvestmentData] = useState({});
  const [investmentImg, setInvestmentImg] = useState();

  useEffect(() => {
    console.log("view init");
    //Retrieve user-associated data from filestorage
  }, []);

  const handleInputChange = (event, field) => {
    if (field === "file") {
      const file = event.target.files[0];
      setInvestmentImg(file);
    } else {
      setInvestmentData(prevData => ({
        ...prevData,
        [field]: event.target.value,
      }));
    }
  };

  const submitForm = () => {
    uploadImage(investmentImg).then((url)=> {
      //Attach to Investment and Submit
    })
  };


  const dropdownDataType = [
    {
      value: "1 AMB",
      text: "1 AMB",
    },
    {
      value: "2 AMB",
      text: "2 AMB",
    },
  ];

  const dropdownDataStatus = [
    {
      value: "En Obra, Entrega Febrero",
      text: "En Obra, Entrega Febrero",
    },
  ];

  return (
    <section id="main" className="flex flex-col p-8  h-[100vh] w-full">
      <div className="w-[10%]">
        <div className="mt-4">
          <InputForm height={"1.5"} placeholder={"Piso"} onChange={(e)=>handleInputChange(e,"piso")} />
        </div>
        <div className="mt-4">
          <InputForm height={"1.5"} placeholder={"Unidad"} onChange={(e)=>handleInputChange(e,"unidad")}/>
        </div>
        <div className="mt-4">
          <Dropdown options={dropdownDataType} />
        </div>
        <div className="mt-4">
          <InputForm height={"1.5"} placeholder={"M2 Totales"} onChange={(e)=>handleInputChange(e,"m2Totales")}/>
        </div>
        <div className="mt-4">
          <Dropdown options={dropdownDataStatus} />
        </div>
        <div className="mt-4">
          <InputForm height={"1.5"} placeholder={"Inversión Necesaria"} onChange={(e)=>handleInputChange(e,"necesaria")} />
        </div>
        <div className="mt-4">
          <InputForm height={"1.5"} placeholder={"Inversión Minima"} onChange={(e)=>handleInputChange(e,"minima")}/>
        </div>
        <div className="mt-4 mb-4">
          <InputForm height={"1.5"} placeholder={"Inversión Comprometida"} onChange={(e)=>handleInputChange(e,"comprometida")}/>
        </div>
        <div className="mt-4">
          <input type="file" id="fileInput" name="fileInput" onChange={(e)=>handleInputChange(e,"file")}/>
        </div>
        <button className="w-[11rem] bg-primaryBlue rounded-xl py-2 justify-center text-white text-[1.2rem] font-medium mt-4"  onClick={() => submitForm()}
>
          Cargar Inversión
        </button>
      </div>
    </section>
  );
};

export default UploadInvestments;
