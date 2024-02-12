import Banner2 from "./Banner";
import CarouselFull from "./Carousel";
//import Discount from "./Discount";
import FlagsBar from "./Flags";
import whatsApp from "../../assets/icons/whatsapp.png";
import Stats from "./Stats";

function Main() {
  return (
    <>
      <CarouselFull />
      <FlagsBar />
      {/*<Discount />*/}
      <Stats />
      <Banner2 />
      <a
        href="https://api.whatsapp.com/send/?phone=%2B14708120999&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <img
          className="fixed bottom-14 right-4 xs:w-[2rem] ] xs:bottom-8 md:w-[3rem] xl:w-[4rem] hover:scale-110"
          src={whatsApp}
          alt=""
        />
      </a>
    </>
  );
}

export default Main;
