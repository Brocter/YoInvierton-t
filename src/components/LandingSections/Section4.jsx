import OportunidadesCarousel from "../OportunidadesCarousel/OportunidadesCarousel";
import { Link } from 'react-router-dom';

export const Section4 = () => {
  return (
    <section className="py-[6rem] mx-auto text-black">
      <div className="px-4">
        <h2 className="font-extrabold text-5xl tracking-[-0.08rem] leading-[1.2]">
          <span className="text-primaryBlue">Oportunidades</span> de Inversión
        </h2>
        <h4 className="text-[1.5rem] font-bold leading-[1.2] py-6">
          Crea tu cuenta. Elegi cuanto invertis. Crece en{" "}
          <b className="text-primaryBlue">Dólares</b>
        </h4>
      </div>
      <OportunidadesCarousel />
      <div className="mx-auto flex justify-center">
        <Link
          to={"/inversiones"}
        >
          <button className="bg-primaryLightBlue border-primaryBlue border rounded-xl py-3 text-primaryBlue text-[1.2rem] font-medium text-center px-[6rem] my-[2rem]">
            Ver más
          </button>
        </Link>
      </div>
    </section>
  );
};
