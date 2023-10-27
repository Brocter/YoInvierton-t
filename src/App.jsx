import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './views/Landing';
import Register from './views/Register';
import LogIn from './views/LogIn';
import Home from './views/Home';
import Investments from './views/Investments';
import Disclaimer from './views/Disclaimer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/iniciar-sesion" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inversiones" element={<Investments />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </>
  );
}

export default App;


    
  