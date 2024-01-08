import React, { useState, useEffect } from "react";
import { OportunidadesCard } from "../components/OportunidadesCard/OportunidadesCard";
import background from "../assets/edificioBackground.png";
import { retrieveInvestments } from "../utils/firebase";

const Investments = () => {
  const [investmentList, setInvestmentList] = useState();

  useEffect(() => {
    console.log("bringing data");
    retrieveInvestments(setInvestmentList);
  }, []);

  useEffect(() => {
    console.log("PROPERTIES", investmentList);
  }, [investmentList]);

  return (
    <section className="lg:mt-4 lg:px-4">
      <div
        id="ProjectOverview"
        className="lg:px-4 mx-auto bg-primarytBlue lg:flex lg:flex-row-reverse items-center justify-end max-w-[105rem] gap-4"
      >
        <div id="Description" className="pt-[2rem] lg:max-w-[35rem] lg:pt-0">
          <div id="Header" className="flex flex-col w-full lg:px-[1.2rem] ">
            <div id="ProgressBar" className="w-[22rem] mb-[1rem] px-[1rem]">
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
            <div
              id="ProjectVideo"
              className="w-[100%] h-[15rem] lg:h-[24rem] max-w-[42.5rem] lg:hidden"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dWmvwOZisNg?si=GEQf1z7MMgsN40rp"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div
              id="Text"
              className=" flex flex-col w-full h-auto px-[1.2rem] mt-[1rem]"
            >
              <h2 className="font-bold text-[clamp(2.4rem,5vw,3.8rem)] text-primaryBlue">
                Jardin Regazzoni
              </h2>
              <p className="mt-[1rem]">
              Ubicado en el centro de Santiago del Estero,Este edificio de más de 10.000m² te acerca a todo. Jardín Regazzoni ofrece diseños modernos con excelente iluminación y funcionalidad. Los residentes podrán disfrutar de una piscina, SUM, solárium, parrillas y cocinas de uso común, Invertí en un proyecto de elegancia y confort, en una de las provincias con mayor crecimiento
              </p>
            </div>
          </div>
          <div
            id="Highlights"
            className="flex w-full justify-between mt-8 bg-primaryBlue lg:bg-white lg:px-[1.8rem]"
          >
            <div className="flex items-center w-[50%] p-2 pl-3 ">
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

        <div
          id="ProjectVideo"
          className="w-[100%] h-[15rem] lg:h-[24rem] max-w-[42.5rem] hidden lg:block"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dWmvwOZisNg?si=GEQf1z7MMgsN40rp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div
        id="ProjectsSection"
        className="px-4 pt-4 max-w-[105rem] mx-auto mt-6 lg:mt-12"
      >
        <h6 className="text-[clamp(1.5rem,2vw,1.75rem)] font-bold leading-[1.2] text-primaryBlue">
          Oportunidades
        </h6>
        <div
          id="list"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4"
        >
          {investmentList && Object.values(investmentList).map((item, index) => (
              <OportunidadesCard InvestmentData={item} key={index} mode={"default"} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Investments;
