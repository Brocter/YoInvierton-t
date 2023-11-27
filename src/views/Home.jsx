import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "../utils/firebase";
import apartment from "../../src/assets/apartment.png";
import background from "../assets/edificioBackground.png";
import { OportunidadesCard } from "../components/OportunidadesCard/OportunidadesCard";
import Dropdown from "../components/Dropdown/Dropdown";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    //check if user is already logged.
    if (user != null) {
      console.log(user);
      getUserData(user.uid).then((data) => {
        console.log("user data", data);
      });
    } else {
      //Otherwise return to Landing Page
      navigate("/");
    }
    //Retrieve user-associated data from filestorage
  }, []);

  const dropdownData = [
    {
      value: "Jardin_Regazzoni",
      text: "Jardin Regazzoni",
    },
  ];

  const [cardData, setcardData] = useState({
    background,
    departamento: "Departamento 9°",
    rendimiento: "8%",
    minimoInversion: "1.300,00",
    porcentaje: "15%",
    totalInvertido: "1000",
    inversionMax: "50.000",
  });

  return (
    <section id="main" className="flex flex-col  p-8  h-[100vh] w-full">
      <div
        id="overview"
        className="flex flex-col h-auto lg:h-[40%] content-center"
      >
        <p className="font-bold text-[clamp(2.4rem,5vw,3.8rem)] text-primaryBlue">
          Mi Portfolio
        </p>
        <div
          id="content"
          className="flex flex-col items-center lg:flex-row  w-full"
        >
          <div
            id="profileDescription"
            className="flex flex-row w-[100%] lg:w-[30%] items-center ml-[-1.7rem] lg:min-w-[40rem]"
          >
            <div id="icon">
              <img src={apartment} width="100%" />
            </div>
            <div id="text" className="flex flex-col w-full">
              <p className="text-[1rem] mb-[-0.6rem] lg:mb-[-1rem] w-full">
                ¡Hola{" "}
                <span className="text-primaryBlue font-bold">Joaquín!</span>
              </p>
              <p className="font-bold text-[2rem] lg:text-[4rem] mb-[-0.6rem] text-primaryBlue">
                1000 USD
              </p>
              <p className="font-medium mt-[0.1rem] lg:text-[2rem]">
                Valor del Portfolio
              </p>
            </div>
          </div>
          <div
            id="profitAnnouncement"
            className="flex flex-col w-[100%] lg:w-[25%] h-auto lg:h-[16rem] border rounded-md bg-primaryBlue p-5 lg:p-6 align-center lg:min-w-[30rem]"
          >
            <p className="text-[1.5rem] lg:text-[2rem] font-bold text-white">
              ¡Felicitaciones!
            </p>
            <p className="lg:text-[1.2rem] text-white">
              Parece que tenes inversiones que cobrar.
            </p>
            <p className="text-[2.5rem] lg:text-[3rem] font-bold text-white">
              1200 USD
            </p>
            <Link
              to={"/registro"}
              className="lg:w-[35%] w-[40%] bg-primaryBlue text-white py-1.5 font-[500] rounded-md border border-white text-[1.2rem] xl:text-[clamp(1.2rem,1.5vw,1.5rem)] mt-2"
            >
              <button className="text-center w-[100%]">Retirar</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="investmentList" className="flex flex-col pl-4pt-[0.5rem]">
        <div id="title" className="font-bold text-[2rem] text-primaryBlue">
          Tenencia
        </div>
        <div className="mt-4 w-[20rem]">
          <Dropdown options={dropdownData} width={8} type={"dropdown"} />
        </div>
        <div id="list" className="grid lg:grid-cols-3 gap-4 xl:grid-cols-4">
          {Array(7)
            .fill(true)
            .map((item, index) => (
              <OportunidadesCard cardData={cardData} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
