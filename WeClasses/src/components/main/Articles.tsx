import { Carousel } from "flowbite-react";

function Articles() {
  return (
    <section className="max-w-[80rem] mx-auto flex flex-col gap-14 py-20">
      <h2 className="text-4xl text-center ">
        Nuestro <span className="text-light-blue">Blog</span>
      </h2>
      <div className=" h-56 flex gap-1 md:gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel indicators={false}>
          <div className="flex items-center h-full  bg-blue-950   text-white relative">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2022-07/RS5884_186093891-hig.jpeg?itok=kQdARGyR"
              className=" h-full object-fill object-right brightness-75"
              alt="Descubre una nueva forma de aprender idiomas con nuestra plataforma"
            />
            <span className="absolute bg-light-blue md:text-lg left-4 top-2 px-4 rounded-lg">
              Topic
            </span>
            <h5 className="absolute z-50 md:text-3xl text-base font-bold bottom-0 p-3 ">
              Beneficios de aprender otros idiomas
            </h5>
          </div>
          <div className="flex items-center h-full  bg-blue-950   text-white relative">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2022-07/RS7897_ThinkstockPhotos-507959212-hig.jpeg?itok=rcUZt8kO"
              className=" h-full object-cover object-right brightness-75"
              alt="Descubre una nueva forma de aprender idiomas con nuestra plataforma"
            />
            <span className="absolute bg-light-blue md:text-lg left-4 top-2 px-4 rounded-lg">
              Topic
            </span>
            <h5 className="absolute z-50 md:text-3xl text-base font-bold bottom-0 p-3 ">
              Beneficios de aprender otros idiomas
            </h5>
          </div>
          <div className="flex items-center h-full  bg-blue-950   text-white relative">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2022-07/RS5896_182025553-hig.jpeg?itok=Q64b7ib0"
              className=" h-full object-fill object-right brightness-75"
              alt="Descubre una nueva forma de aprender idiomas con nuestra plataforma"
            />
            <span className="absolute bg-light-blue md:text-lg left-4 top-2 px-4 rounded-lg">
              Topic
            </span>
            <h5 className="absolute z-50 md:text-3xl text-base font-bold bottom-0 p-3 ">
              Cómo aprender un idiomas más rápido
            </h5>
          </div>
        </Carousel>
        <Carousel indicators={false}>
          <div className="flex items-center h-full  bg-blue-950   text-white relative">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2022-07/RS5884_186093891-hig.jpeg?itok=kQdARGyR"
              className=" h-full object-fill object-right brightness-75"
              alt="Descubre una nueva forma de aprender idiomas con nuestra plataforma"
            />
            <span className="absolute bg-light-blue md:text-lg left-4 top-2 px-4 rounded-lg">
              Topic
            </span>
            <h5 className="absolute z-50 md:text-3xl text-base font-bold bottom-0 p-3 ">
              Beneficios de aprender otros idiomas
            </h5>
          </div>
          <div className="flex items-center h-full  bg-blue-950   text-white relative">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2022-07/RS7897_ThinkstockPhotos-507959212-hig.jpeg?itok=rcUZt8kO"
              className=" h-full object-cover object-right brightness-75"
              alt="Descubre una nueva forma de aprender idiomas con nuestra plataforma"
            />
            <span className="absolute bg-light-blue md:text-lg left-4 top-2 px-4 rounded-lg">
              Topic
            </span>
            <h5 className="absolute z-50 md:text-3xl text-base font-bold bottom-0 p-3 ">
              Beneficios de aprender otros idiomas
            </h5>
          </div>
          <div className="flex items-center h-full  bg-blue-950   text-white relative">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2022-07/RS5896_182025553-hig.jpeg?itok=Q64b7ib0"
              className=" h-full object-fill object-right brightness-75"
              alt="Descubre una nueva forma de aprender idiomas con nuestra plataforma"
            />
            <span className="absolute bg-light-blue md:text-lg left-4 top-2 px-4 rounded-lg">
              Topic
            </span>
            <h5 className="absolute z-50 md:text-3xl text-base font-bold bottom-0 p-3 ">
              Cómo aprender un idiomas más rápido
            </h5>
          </div>
        </Carousel>
        <Carousel indicators={false} className="hidden md:block">
          <div className="flex items-center h-full  bg-blue-950   text-white relative">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2023-02/RS8042_GettyImages-1063745264-hig_0.jpeg?itok=fiQmVENM"
              className=" h-full object-fill object-right brightness-75"
              alt="Descubre una nueva forma de aprender idiomas con nuestra plataforma"
            />
            <span className="absolute bg-light-blue text-lg left-4 top-2 px-4 rounded-lg">
              Topic
            </span>
            <h5 className="absolute z-50 text-3xl font-bold bottom-0 p-3 ">
              Beneficios de aprender otros idiomas
            </h5>
          </div>
          <div className="flex items-center h-full  bg-blue-950   text-white relative">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2022-07/RS8045_GettyImages-656287929-hig.jpeg?itok=lBXj_bHg"
              className=" h-full object-cover object-right brightness-75"
              alt="Descubre una nueva forma de aprender idiomas con nuestra plataforma"
            />
            <span className="absolute bg-light-blue text-lg left-4 top-2 px-4 rounded-lg">
              Topic
            </span>
            <h5 className="absolute z-50 text-3xl font-bold bottom-0 p-3 ">
              Beneficios de aprender otros idiomas
            </h5>
          </div>
          <div className="flex items-center h-full  bg-blue-950   text-white relative">
            <img
              src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2022-07/RS8036_GettyImages-960950716-hig.jpeg?itok=YpJHzxCH"
              className=" h-full object-cover object-right brightness-75"
              alt="Descubre una nueva forma de aprender idiomas con nuestra plataforma"
            />
            <span className="absolute bg-light-blue text-lg left-4 top-2 px-4 rounded-lg">
              Topic
            </span>
            <h5 className="absolute z-50 text-3xl font-bold bottom-0 p-3 ">
              Cómo aprender un idiomas más rápido
            </h5>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Articles;
