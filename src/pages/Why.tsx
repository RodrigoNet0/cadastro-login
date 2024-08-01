import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Why = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="https://wallpapercave.com/wp/wp2757956.gif"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl">
          Bem-vindo à Órbita Store
        </h1>
        <p className="mb-8 text-base md:text-lg">
          A Órbita Store é uma loja de importados e variedades, oferecendo uma
          ampla gama de produtos de qualidade a preços acessíveis.
        </p>

        <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 shadow-lg w-full max-w-xs">
          <img
            src="https://avatars.githubusercontent.com/u/134714036?v=4"
            alt="Rodrigo Neto"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">Rodrigo Neto</h2>
          <p className="text-sm">Desenvolvedor Front End & CEO</p>
        </div>

    
        <Link to="/Home" className="mt-4 text-white">
          <RiArrowGoBackLine />
        </Link>
      </div>
    </div>
  );
};

export default Why;
