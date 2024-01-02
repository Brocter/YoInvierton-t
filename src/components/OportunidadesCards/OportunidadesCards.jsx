import { OportunidadesCard } from "../OportunidadesCard/OportunidadesCard";
import { foto6 } from "../../assets/carouselImages/carouselImages";
import { useEffect, useState, useRef } from "react";


const OportunidadesCards = ({ topInvestments }) => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-[80rem] mx-auto xl:gap-6">
      {topInvestments && topInvestments.length === 1 ? (
        <div className="col-span-1"></div> // Empty space to center the single card
      ) : null}
      {topInvestments && topInvestments.map((investment, i) => (
        <OportunidadesCard key={i} InvestmentData={investment} mode={"default"} />
      ))}
    </div>
  );
};

export default OportunidadesCards;