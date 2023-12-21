import React, { useState, useEffect } from "react";
import { Section1 } from '../components/LandingSections/Section1';
import { Section2 } from '../components/LandingSections/Section2';
import { Section3 } from '../components/LandingSections/Section3';
import { Section4 } from '../components/LandingSections/Section4';
import { Section5 } from '../components/LandingSections/Section5';
import { Section6 } from '../components/LandingSections/Section6';
import Footer from '../components/Footer';
import { retrieveInvestments } from "../utils/firebase";



const Landing = () => {

  const [topInvestments, setTopInvestments] = useState();

  useEffect(() => {
    retrieveInvestments(undefined,true).then((data)=>{
      setTopInvestments(data)
    })
  }, []);

  return (
    <div className='h-screen'>
      <Section1/>
      <Section2/>
      <Section3/>
      {topInvestments && <Section4 topInvestments={topInvestments}/>}
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
    
  );
};

export default Landing;