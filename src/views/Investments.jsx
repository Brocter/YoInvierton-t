import React, { useState, useEffect } from "react";
import { OportunidadesCard } from "../components/OportunidadesCard/OportunidadesCard";
import background from "../assets/edificioBackground.png";

const Investments = () => {
  useEffect(() => {
    console.log("bringing data");
  }, []);

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
    <div className="flex flex-col">
      <div
        id="ProjectOverview"
        className="flex flex-col lg:flex-row w-full lg:h-[40vh] lg:pl-[8rem] items-center bg-primarytBlue"
      >
        <div
          id="ProjectVideo"
          className="flex flex-col items-start w-full h-[14.55rem] lg:w-[37.5%] lg:h-[25.4rem] lg:max-w-[45em]"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dWmvwOZisNg?si=GEQf1z7MMgsN40rp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div
          id="Description"
          className="flex flex-col items-start lg:ml-[3.5rem] pt-[2rem] p-[1.2rem]"
        >
          <div id="Header" className="flex flex-col w-full">
            <div id="ProgressBar" className="w-[20rem] mb-[1rem]">
              <p className="font-bold text-primaryBlue">En Construcción</p>
              <div className="bg-primaryLightBlue rounded-full w-full">
                <div
                  className={`bg-primaryBlue w-[15%] pt-3 rounded-full`}
                ></div>
              </div>
              <div className="flex flex-row gap-8 ">
                <div>
                  <span className="font-bold text-primaryBlue">Progreso: </span>{" "}
                  75%{" "}
                </div>
                <div>
                  <span className="font-bold text-primaryBlue">
                    Inicio de Obra:
                  </span>{" "}
                  01/02/2023
                </div>
              </div>
            </div>
            <div id="Text" className=" flex flex-col  lg:w-[42rem] w-full h-auto">
              <h1 className="font-bold text-6xl text-primaryBlue">
                Jardin Regazzoni
              </h1>
              <p className="mt-[1.5rem]">
                Lorem ipsum dolor sit amet consectetur. Feugiat tempor enim erat
                a non fames risus. Lorem ipsum dolor sit amet consectetur. Lorem
                ipsum dolor sit amet consectetur. Feugiat tempor enim erat a non
                fames risus. Lorem ipsum dolor.
              </p>
            </div>
            <div id="Highlights" className="flex flex-row w-full mt-8 bg-primaryBlue lg:bg-white ml-[-1.2rem] w-[115%] ">

              <div className="flex flex-row items-center w-[50%] p-2 pl-3  ">
                <div className="lg:flex flex-col text-white lg:text-primaryBlue text-[1.5rem] text-center font-bold">
                  <div className="text-[2.05rem] mb-[-0.8rem]">1000</div>
                  <p>USD</p>
                </div>
                <p className=" w-full lg:w-[10rem] ml-5 lg:text-[1.4rem] text-white lg:text-black items-center font-medium">
                  Minimo de Inversión
                </p>
              </div>

              <div className="flex flex-row p-2 items-center w-[50%] ">
                <div className="lg:flex flex-col text-[1.5rem] items-center font-bold text-white lg:text-primaryBlue">
                  <div className="text-[2.05rem] mb-[-0.8rem]">8%</div>
                  <div>USD</div>
                </div>
                <p className="lg:w-[10rem] ml-5 lg:text-[1.4rem] text-white lg:text-black items-center font-medium">
                  Rentabilidad anual en dolares
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ProjectsSection" className="w-full h-auto p-5 pt-5 lg:pl-[7rem] ">
        <div id="title" className="lg:pl-2">
          <p className="font-bold text-3xl text-primaryBlue">Proyectos</p>
        </div>
        <div
          id="list"
          className="grid lg:grid-cols-5 gap-4 pt-0 lg:p-2"
        >
          {Array(7)
            .fill(true)
            .map((item, index) => (
              <OportunidadesCard cardData={cardData} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Investments;
