import {useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
  }, []);
  return (
    <div className='w-full h-full'>
        <Navbar/>
        <Outlet className='w-full h-full'/>
    </div>
  );
}

export default App;


    
  