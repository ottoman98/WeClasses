import { Carousel } from "flowbite-react";
import { FcNext } from "react-icons/fc";

import full1 from "../../assets/carousel/italki.webp";
import full2 from "../../assets/carousel/slide2.jpg";
import full3 from "../../assets/carousel/slide3.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContextLanguage } from "../../context/language";

function CarouselFull() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className="h-96">
      <Carousel
        pauseOnHover
        className="xs:text-[0.7rem] md:text-[1rem] xl:text-[2rem]"
        slide={false}
      >
        <div className="flex  h-full items-center justify-center text-customBlack ">
          <img
            src={full1}
            className="w-1/2 h-full object-cover object-left"
            alt="Domina diferentes idiomas con expertos nativos en nuestra plataforma"
          />
          <div className="w-1/2">
            <div className=" flex p-5  h-full flex-col gap-5">
              <h1 className="text-4xl font-bold">
                {translation.carousel.slide1.title}
              </h1>
              <ul className="text-xs flex gap-3 flex-col">
                <li className="flex gap-2">
                  <FcNext />
                  <p>
                    Take customizable 1-on-1 lessons trusted by millions of user
                  </p>
                </li>
                <li className="flex gap-2">
                  <FcNext />
                  <p>
                    Take customizable 1-on-1 lessons trusted by millions of user
                  </p>
                </li>
                <li className="flex gap-2">
                  <FcNext />
                  <p>
                    Take customizable 1-on-1 lessons trusted by millions of user
                  </p>
                </li>
              </ul>
              <Link
                className="bg-blue-950 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-blue-900 duration-500"
                to="#"
              >
                {translation.carousel.slide1.button}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-blue-950   text-white">
          <div className="w-1/2 flex p-5 md:p-[6rem] flex-col gap-10 ">
            <p>{translation.carousel.slide2.title}</p>
            <Link
              className="bg-black w-1/2 flex justify-center rounded-xl duration-500 hover:bg-white hover:text-black"
              to="#"
            >
              {translation.carousel.slide2.button}
            </Link>
          </div>
          <img
            src={full2}
            className="w-1/2 h-full object-cover object-right"
            alt="Descubre una nueva forma de aprender idiomas con nuestra plataforma"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-blue-950   text-white">
          <img
            src={full3}
            className="w-1/2 h-full object-cover object-right"
            alt="Eleva tu nivel en el idioma inglés con profesores nativos 
"
          />
          <div className="w-1/2 flex p-5 md:p-[6rem] flex-col gap-10 ">
            <p>{translation.carousel.slide3.title}</p>
            <Link
              className="bg-black w-1/2 flex justify-center rounded-xl duration-500 hover:bg-white hover:text-black"
              to="#"
            >
              {translation.carousel.slide3.button}
            </Link>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default CarouselFull;
