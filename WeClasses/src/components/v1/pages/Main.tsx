import Banner2 from "../Banner";
import CarouselFull from "../Carousel";
import Discount from "../Discount";
import FlagsBar from "../Flags";
import whatsApp from "../../../assets/whatsapp.png";
import Stats from "../Stats";

function Main() {
  return (
    <>
      <CarouselFull />
      <FlagsBar />
      <Discount />
      <Banner2 />
      <Stats />

      <img
        className="fixed bottom-14 right-4 xs:w-[2rem] ] xs:bottom-8 md:w-[3rem] xl:w-[4rem] hover:scale-110"
        src={whatsApp}
        alt=""
      />
    </>
  );
}

export default Main;
