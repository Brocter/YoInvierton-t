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
        className="flex flex-col lg:flex-row sw-full h-[40vh] p-24 pt-0 pb-0 items-center bg-primarytBlue"
      >
        <div
          id="ProjectVideo"
          className="flex flex-col w-autoh-full items-start"
        >
          <iframe
            width="660rem"
            height="370rem"
            src="https://www.youtube.com/embed/dWmvwOZisNg?si=GEQf1z7MMgsN40rp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div id="Description" className="flex flex-col items-start ml-[3.5rem]">
          <div id="Header" className="flex flex-col">
            <div id="ProgressBar" className="w-[20rem] mb-[1rem]">
              <p className="font-bold text-primaryBlue">En Construcción</p>
              <div className="bg-primaryLightBlue rounded-full w-full">
                <div
                  className={`bg-primaryBlue w-[15%] pt-3 rounded-full`}
                ></div>
              </div>
              <div className="flex flex-row gap-8 "><div><span className="font-bold text-primaryBlue">Progreso: </span> 75% </div><div><span className="font-bold text-primaryBlue">Inicio de Obra:</span> 01/02/2023</div></div>
            </div>
            <div id="Text">
              <h1 className="my-[-0.25rem] font-bold text-6xl text-primaryBlue">
                Jardin Regazzoni
              </h1>
              <p className="pt-[2rem] pr-20 w-[42rem]">
                Lorem ipsum dolor sit amet consectetur. Feugiat tempor enim erat
                a non fames risus. Lorem ipsum dolor sit amet consectetur. Lorem
                ipsum dolor sit amet consectetur. Feugiat tempor enim erat a non
                fames risus. Lorem ipsum dolor.
              </p>
            </div>
            <div id="Highlights" className="lg:flex flex-row pt-5 ">
              <div className="flex flex-row pt-5 items-center mr-[5rem] ">
                <div className="lg:flex flex-col text-primaryBlue text-[1.5rem] items-center font-bold ">
                  <div className="text-[2.05rem] mb-[-0.8rem]">1000</div>
                  <div>USD</div>
                </div>{" "}
                <p className="w-[10rem] ml-5 text-[1.4rem] items-center">
                  Monto Minimo de Inversión
                </p>
              </div>

              <div className="flex flex-row pt-5 items-center ">
                <div className="lg:flex flex-col text-primaryBlue text-[1.5rem] items-center font-bold ">
                  <div className="text-[2.05rem] mb-[-0.8rem]">8%</div>
                  <div>USD</div>
                </div>{" "}
                <p className="w-[10rem] ml-5 text-[1.4rem] items-center">
                  Rentabilidad anual en dolares
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ProjectsSection"></div>
      <div id="title" className="pl-24 pt-8">
        <p className="font-bold text-3xl text-primaryBlue">Proyectos</p>
      </div>
      <div id="list" className="grid grid-cols-5 gap-4 p-24 pt-0">
        {Array(7).fill(true).map((item, index) => (<OportunidadesCard cardData={cardData} />))}
      </div>
    </div>
  );
};

export default Investments;
