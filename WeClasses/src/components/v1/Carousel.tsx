import { Carousel } from "flowbite-react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

function CarouselFull() {
  return (
    <section className="h-56 sm:h-[25rem] xl:h-[30rem] 2xl:h-[36rem]">
      <Carousel pauseOnHover>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative">
          <img className="object-cover w-full h-full" src={slide1} alt="" />

          <div className="absolute w-full h-full flex items-center justify-around">
            <h2 className="text-[3.8rem] font-black w-1/3 ">
              Libera tu potencial con los mejores profesores de idiomas
            </h2>
            <button className="p-2 text-white bg-black -mb-56 rounded-xl px-16">
              Conoce mas
            </button>
          </div>
        </div>

        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="w-full h-full bg-red-400 p-20 flex justify-center flex-col">
            <h2 className="text-[3rem]">
              Unlock your potential with the best language tutors.
            </h2>
            <button className="p-2 text-white bg-black mt-20 rounded-xl px-16">
              Conoce mas
            </button>
          </div>
          <img className="object-cover  h-full " src={slide2} alt="" />
        </div>

        <div className="flex h-full items-center justify-center">
          <div className="w-full h-full bg-red-400 p-20 flex justify-center flex-col">
            <h2 className="text-[3rem]">
              Unlock your potential with the best language tutors.
            </h2>
            <button className="p-2 text-white bg-black mt-20 rounded-xl px-16">
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
