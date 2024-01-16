import Banner2 from "../Banner";
import CarouselFull from "../Carousel";
import Discount from "../Discount";
import FlagsBar from "../Flags";
import Footer2 from "../Footer";
import whatsApp from "../../../assets/whatsapp.png";

function Main() {
  return (
    <>
      <CarouselFull />
      <FlagsBar />
      <Discount />
      <Banner2 />
      <Footer2 />
      <img className="fixed bottom-4 right-4 w-24" src={whatsApp} alt="" />
    </>
  );
}

export default Main;
