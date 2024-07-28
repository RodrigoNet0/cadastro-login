const links = [
    { name: "Vitrine de produtos", href: "#" },
    { name: "Categorias", href: "#" },
    { name: "Quem Somos", href: "#" },
    { name: "Contato", href: "#" }
   
  ];
  
  export default function Home() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 w-full min-h-screen flex flex-col">
        <div
          aria-hidden="true"
          className="hidden sm:block absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="flex-grow mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="max-w-2xl lg:max-w-none">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Órbita Store
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Bem-vindo à Órbita Store! Somos sua nova loja de importados,
                trazendo as melhores tendências e novidades do mundo diretamente
                para você. Aqui na Órbita Store, você encontra uma seleção exclusiva
                de produtos de alta qualidade, cuidadosamente escolhidos para
                atender às suas necessidades e desejos. Explore nossas categorias e
                descubra um universo de possibilidades. Sua satisfação é nossa
                prioridade, e estamos aqui para oferecer uma experiência de compra
                única e inesquecível.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://th.bing.com/th/id/R.d70e26252227bc4507ee321603eeff72?rik=zkf6OXZh1pKvZw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-astronautastronautcosmonauttrainedtrainedspaceflightpilotspace-travelers-14215266612478vi0q.png&ehk=gvQIr720pTZkC%2bEsyeW5Hq%2fdoxAqkDy%2bIjKMIaDZQNo%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="max-w-[300px] h-auto"
              />
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="block">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <footer className="text-center flex justify-center items-center mt-12">
          <p className="text-white">Todos os direitos reservados © 2024 Órbita Store</p>
        </footer>
      </div>
    );
  }
  