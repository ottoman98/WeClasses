import Banner2 from "../Banner";
import CarouselFull from "../Carousel";
import Discount from "../Discount";
import FlagsBar from "../Flags";
import Footer2 from "../Footer";
import whatsApp from "../../../assets/whatsapp.png";
import Stats from "../Stats";

function Main() {
  return (
    <main className="max-w-[120rem] text- mx-auto">
      <CarouselFull />
      <FlagsBar />
      <Discount />
      <Banner2 />
      <Stats />
      <Footer2 />
      <img
        className="fixed bottom-24 right-4 w-[3vh] md:w-20 hover:scale-110"
        src={whatsApp}
        alt=""
      />
    </main>
  );
}

export default Main;
