import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './views/Landing';
import SignIn from './views/SignIn';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sesion" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;


    
  