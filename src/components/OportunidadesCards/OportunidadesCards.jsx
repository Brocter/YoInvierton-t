import { OportunidadesCard } from "../OportunidadesCard/OportunidadesCard";
import { foto6 } from "../../assets/carouselImages/carouselImages";
import { useEffect, useState, useRef } from "react";


const OportunidadesCards = ({topInvestments}) => {

  return (
    <div className="grid grid-cols-3 gap-4 max-w-[80rem] mx-auto xl:gap-6">
      {topInvestments && topInvestments.map((investment, i) => (
        <OportunidadesCard key={i} InvestmentData={investment} mode={"default"} />
      ))}
    </div>
  );
};

export default OportunidadesCards;
