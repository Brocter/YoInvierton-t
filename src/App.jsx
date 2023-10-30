import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className='w-full h-full'>
        <Navbar/>
        <Outlet className='w-full h-full'/>
    </div>
  );
}

export default App;


    
  