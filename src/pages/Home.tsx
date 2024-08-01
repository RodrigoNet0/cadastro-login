import "./Home.css";

const links = [
  { name: "Vitrine de produtos", href: "/Vitrine" },
  { name: "Login", href: "/Login" },
  { name: "Quem Somos", href: "/Why" },
  { name: "Contato", href: "/Contato" },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 w-full min-h-screen flex flex-col">
      <img
        src="https://wallpapercave.com/wp/wp2757956.gif"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-10 flex-grow mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="max-w-2xl lg:max-w-none">
            <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 animate-flame sm:text-6xl">
              Órbita Store
            </h2>
            <p className="mt-6 text-lg leading-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 animate-flame">
              Bem-vindo à Órbita Store! Somos sua nova loja de importados,
              trazendo as melhores tendências e novidades do mundo diretamente
              para você. Aqui na Órbita Store, você encontra uma seleção
              exclusiva de produtos de alta qualidade, cuidadosamente escolhidos
              para atender às suas necessidades e desejos. Explore nossas
              categorias e descubra um universo de possibilidades. Sua
              satisfação é nossa prioridade, e estamos aqui para oferecer uma
              experiência de compra única e inesquecível.
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* <img
                src=""
                alt=""
                className="max-w-[300px] h-auto"
                
              /> */}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative block transition duration-300 ease-in-out transform hover:scale-105"
              >
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 animate-flame">
                  {link.name}
                </span>
                <span className="relative z-10" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* <footer className="text-center flex justify-center items-center mt-12">
            <p className="text-white">Todos os direitos reservados © 2024 Órbita Store</p>
          </footer> */}
    </div>
  );
}
