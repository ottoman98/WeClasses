import { Carousel } from "flowbite-react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

function CarouselFull() {
  return (
    <section className="h-56 sm:h-[25rem] xl:h-[30rem] 2xl:h-[36rem]">
      <Carousel pauseOnHover slide={false}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="w-full h-full  bg-blue-950 text-white p-20 flex justify-center flex-col">
            <h2 className="text-[3rem]">
              Aprende un nuevo idioma con nuestros profesores expertos.
            </h2>
            <button className="p-2  bg-black mt-20 rounded-xl px-16">
              Conoce mas
            </button>
          </div>
          <img className="object-cover  h-full w-full " src={slide1} alt="" />
        </div>

        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="w-full h-full  bg-blue-950 text-white p-20 flex justify-center flex-col">
            <h2 className="text-[3rem]">
              Únete a nuestra plataforma y comienza tus lecciones personalizadas
              con profesores nativos
            </h2>
            <button className="p-2  bg-black mt-20 rounded-xl px-16">
              Conoce mas
            </button>
          </div>
          <img className="object-cover  h-full " src={slide2} alt="" />
        </div>

        <div className="flex h-full items-center justify-center">
          <div className="w-full h-full bg-blue-950 text-white p-20 flex justify-center flex-col">
            <h2 className="text-[3rem]">
              Conviértete en un ciudadano del mundo hablando diferentes idiomas.
            </h2>
            <button className="p-2 bg-black mt-20 rounded-xl px-16">
              Conoce mas
            </button>
          </div>
          <div className="w-full h-full relative">
            <img
              className="w-64 absolute left-1/2 top-1/2 -translate-y-[50%] -translate-x-[0%]"
              src={slide3}
              alt=""
            />
            <img
              className="w-80 absolute left-1/2 top-1/2 -translate-y-[50%] -translate-x-[30%]"
              src={slide3}
              alt=""
            />
            <img
              className="w-96 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              src={slide3}
              alt=""
            />
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default CarouselFull;
