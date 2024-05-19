import { Link } from "react-router-dom";
import { FcNext } from "react-icons/fc";
import img1 from "../../assets/images/burbujas 1.png";
import img2 from "../../assets/images/Video llamada 2.png";
import img3 from "../../assets/images/mundo 1.png";
import { useContext } from "react";
import { DataContextLanguage } from "../../context/language";
function Offers() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className="flex justify-center flex-col py-20 px-8 max-w-[80rem] mx-auto">
      <h2 className="text-lg md:text-4xl text-center font-extrabold text-blue-950">
        {translation.offer.title}
      </h2>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex md:flex-col gap-5 items-center">
          <img className=" md:w-60  w-1/2" src={img1} alt="" />
          <div className="flex flex-col gap-1 w-1/2">
            <strong className="text-blue-900 md:text-center  inline-block w-full    text-base md:text-lg">
              {translation.offer.content[0].title}
            </strong>
            <p className="text-justify">{translation.offer.content[0].body}</p>
            <Link className="text-center text-light-blue font-bold " to="/">
              <div className="flex flex-row items-center">
                <Link to="/classes"> {translation.offer.content[0].link}</Link>
                <FcNext />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-row-reverse md:flex-col gap-5 items-center">
          <img className="w-1/2 md:w-60 " src={img2} alt="" />
          <div className="w-1/2 flex flex-col gap-1">
            <strong className="text-blue-900 md:text-center  inline-block w-full    text-base md:text-lg">
              {translation.offer.content[1].title}
            </strong>
            <p className="text-justify">{translation.offer.content[1].body}</p>
            <Link className="text-center text-light-blue font-bold " to="/">
              <div className="flex flex-row items-center">
                <Link to="/classes"> {translation.offer.content[1].link}</Link>
                <FcNext />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex md:flex-col gap-5 items-center">
          <img className="w-1/2 md:w-60 " src={img3} alt="" />
          <div className="w-1/2 flex flex-col gap-1">
            <strong className="text-blue-900 md:text-center  inline-block w-full    text-base md:text-lg">
              {translation.offer.content[2].title}
            </strong>
            <p className="text-justify">{translation.offer.content[2].body}</p>
            <Link className="text-center text-light-blue font-bold " to="/">
              <div className="flex flex-row items-center">
                <Link to="/classes"> {translation.offer.content[2].link}</Link>
                <FcNext />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
