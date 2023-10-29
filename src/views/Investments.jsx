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
    <div>
      <div id="ProjectOverview" className="lg:flex flex-row w-screen h-2/5">
        <div id="Description" className="lg:flex flex-col">
          <div id="Header">
            <div id="ProgressBar"></div>
            <div id="Text">
              <h1>Jardin Regazzoni</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Feugiat tempor enim erat
                a non fames risus. Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div id="Highlights" className="lg:flex flex-row">
            <div id="MontoMinimo">1300 USD - Monto Minimo de Inversión</div>
            <div id="Rentabilidad">8% - Rentabilidad anual en dolares</div>
            <div></div>
          </div>
        </div>
        <div id="ProjectVideo">
          <iframe
            width="900"
            height="506"
            src="https://www.youtube.com/embed/dWmvwOZisNg?si=GEQf1z7MMgsN40rp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <OportunidadesCard cardData={cardData} />
        <OportunidadesCard cardData={cardData} />
        <OportunidadesCard cardData={cardData} />
        <OportunidadesCard cardData={cardData} />
        <OportunidadesCard cardData={cardData} />
        <OportunidadesCard cardData={cardData} />
        <OportunidadesCard cardData={cardData} />
      </div>
    </div>
  );
};

export default Investments;
