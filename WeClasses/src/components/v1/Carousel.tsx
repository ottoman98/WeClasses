import { Carousel } from "flowbite-react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

function CarouselFull() {
  return (
    <div className="h-56 sm:h-[25rem] xl:h-[30rem] 2xl:h-[36rem]">
      <Carousel pauseOnHover slide={false}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative">
          <img className="object-cover w-full h-full" src={slide1} alt="" />

          <div className="absolute w-full h-full flex">
            <button className="bg-purple-500 w-28 h-4">Conoce mas</button>
            <p className="bg-green-500 w-1/5  absolute  right-2 top-40 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vero libero adipisci ducimus officiis, quae minus id reiciendis
              nostrum dolores expedita rerum possimus cupiditate corporis
              praesentium voluptates at et illo.
            </p>
          </div>
        </div>

        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="object-cover w-full h-full" src={slide2} alt="" />
        </div>

        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="object-cover w-full h-full" src={slide3} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselFull;
