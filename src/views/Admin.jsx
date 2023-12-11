import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../assets/edificioBackground.png";
import UserCard from "../components/UserCard/UserCard";
import InputForm from "../components/InputForm";
import arrowDown from "../assets/icons/arrow_down.png";
import Dropdown from "../components/Dropdown/Dropdown";
import { getAllUsers } from "../utils/firebase";

const Admin = () => {
  const navigate = useNavigate();
  const [allUserData, setAllUserData] = useState([]);
  const [cardSelected, setcardSelected] = useState("none");
  const [cardData, setcardData] = useState({
    background,
    departamento: "Departamento 9°",
    rendimiento: "8%",
    minimoInversion: "1.300,00",
    porcentaje: "15%",
    totalInvertido: "1000",
    inversionMax: "50.000",
  });

  useEffect(() => {
    console.log("view init");
    getAllUsers().then((data) => {
      console.log("ALLUSERS", data)
      setAllUserData(Object.values(data));
    });
    //Retrieve user-associated data from filestorage
  }, []);

  // useEffect(()=> {
  //   console.log(cardSelected)
  // }, [cardSelected])

  const dropdownData = [
    {
      value: "Antiguedad",
      text: "Antiguedad",
    },
    {
      value: "Alfabetico",
      text: "Alfabetico",
    },
    {
      value: "Inversión",
      text: "Inversión",
    },
  ];

  const handleCardSelected = (index) => {
    setcardSelected(index);
  };

  return (
    <section id="main" className="flex flex-col p-8  h-[100vh] w-full">
      <div
        id="title"
        className="font-bold text-[clamp(2.4rem,5vw,3.8rem)] text-primaryBlue"
      >
        Usuarios
      </div>
      <div className="flex flex-row justify-between">
        <div id="filter" className="flex flex-row mt-8">
          <div id="search" className="h-auto">
            <InputForm height={1.5} placeholder={"Buscar por nombre"} />
          </div>
          <div id="SortButton" className="ml-4">
            <Dropdown options={dropdownData} width={8} type={"filter"} />
          </div>
        </div>
        <div>
        <Link to="/admin/cargar" preventScrollReset={true} >
          <button className='flex p-1 bg-primaryBlue justify-center items-center px-5 rounded-md text-white font-[500] text-5 mr-[1.5rem]'>Cargar Propiedades</button>
        </Link>
        </div>
      </div>
      <div id="userList" className="mt-8">
        {allUserData.map((item, index) => (
            <UserCard
              key={index}
              data={item}
              index={index}
              handleCardSelected={handleCardSelected}
              cardSelected={cardSelected}
            />
          ))}
      </div>
    </section>
  );
};

export default Admin;
