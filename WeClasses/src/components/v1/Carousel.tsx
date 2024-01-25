import { Carousel } from "flowbite-react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import { Link } from "react-router-dom";

function CarouselFull() {
  return (
    <section className="h-56 sm:h-[25rem] md:h-[20rem] xl:h-[30rem] 2xl:h-[36rem] ">
      <Carousel
        pauseOnHover
        className="xs:text-[0.7rem] md:text-[1rem] xl:text-[2rem]"
      >
        <div className="flex h-full items-center justify-center bg-blue-950  text-white">
          <img src={slide1} className="w-1/2 h-full object-cover " alt="" />
          <div className="w-1/2 flex p-5 md:p-[6rem] flex-col gap-10">
            <p>Aprende un nuevo idioma con nuestros profesores expertos.</p>
            <Link
              className="bg-black max-w-1/2 flex justify-center rounded-xl duration-500 hover:bg-white hover:text-black"
              to="#"
            >
              Conoce Mas.
            </Link>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-blue-950   text-white">
          <div className="w-1/2 flex p-5 md:p-[6rem] flex-col gap-10 ">
            <p>
              Únete a nuestra plataforma y comienza tus lecciones personalizadas
              con profesores nativos..
            </p>
            <Link
              className="bg-black w-1/2 flex justify-center rounded-xl duration-500 hover:bg-white hover:text-black"
              to="#"
            >
              Conoce Mas.
            </Link>
          </div>
          <img src={slide2} className="w-1/2 h-full" alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-blue-950   text-white">
          <img src={slide3} className="w-1/2 h-full" alt="" />
          <div className="w-1/2 flex p-5 md:p-[6rem] flex-col gap-10 ">
            <p>
              Únete a nuestra plataforma y comienza tus lecciones personalizadas
              con profesores nativos..
            </p>
            <Link
              className="bg-black w-1/2 flex justify-center rounded-xl duration-500 hover:bg-white hover:text-black"
              to="#"
            >
              Conoce Mas.
            </Link>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default CarouselFull;
