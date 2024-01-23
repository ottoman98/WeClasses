import Banner2 from "../Banner";
import CarouselFull from "../Carousel";
import Discount from "../Discount";
import FlagsBar from "../Flags";
import Footer2 from "../Footer";
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
      <Footer2 />
      <img
        className="fixed bottom-44 right-4 w-16 hover:scale-110"
        src={whatsApp}
        alt=""
      />
    </>
  );
}

export default Main;
