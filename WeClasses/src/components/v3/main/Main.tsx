import Banner2 from "../../main/Banner";
import BecomeTutor from "../../main/BecomeTutor";
import FlagsBar from "../../main/Flags";
import MobileBanner from "../../main/MobileBanner";
import Stats from "../../main/Stats";
import Benefits from "./Benefits";
import Faq from "./Faq";
import Hero from "./Hero";
import Offer from "./Offer";
import Separator from "./Separator";
import Testimonials from "./Testimonials";
import Video from "./Video";

function Main() {
  return (
    <>
      <Hero />
      <FlagsBar />
      <Benefits />
      <Separator />
      <Offer />
      <Stats />
      <Banner2 />
      <Video />
      <Testimonials />
      <BecomeTutor />
      <MobileBanner />
      <Faq />
    </>
  );
}

export default Main;
