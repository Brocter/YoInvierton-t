import { Section1 } from '../components/LandingSections/Section1';
import { Section2 } from '../components/LandingSections/Section2';
import { Section3 } from '../components/LandingSections/Section3';
import { Section4 } from '../components/LandingSections/Section4';
import { Section5 } from '../components/LandingSections/Section5';
import { Section6 } from '../components/LandingSections/Section6';
import Footer from '../components/Footer';



const Landing = () => {
  return (
    <div className='h-screen'>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
    
  );
};

export default Landing;