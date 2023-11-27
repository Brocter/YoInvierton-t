import { Link } from "react-router-dom";

export function NavHandlers({ nav, handleClose }) {
    const handleAbout = () => {
      handleClose();
    };
  
    const handleStore = () => {
      handleClose();
    };
  
    return (
      <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 top-[5rem] border-b border-black-600 pb-1 z-30 lg:hidden'}>
        <li className="border-b border-300 w-full">
          <div className="pt-3 text-[1.2rem] text-black font-[500] cursor-pointer " onClick={handleAbout}>
            Novedades
          </div>
        </li>
        <li className="border-b border-black-300 w-full">
          <div className="pt-3 text-[1.2rem] text-black font-[500] cursor-pointer focus:bg-primaryBlue" onClick={handleStore}>
          <Link to="/inversiones">Oportunidades</Link>
          </div>
        </li>
        <li className="w-full">
          <div className="pt-3 text-[1.2rem] text-primaryBlue font-[500] cursor-pointer" onClick={handleStore}>
            <Link to="/iniciar-sesion">Iniciar Sesion</Link>
          </div>
        </li>
      </ul>
    );
  }