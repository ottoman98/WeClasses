import { Link } from "react-router-dom";
import { FcNext } from "react-icons/fc";
function Offers() {
  return (
    <section className="flex justify-center flex-col py-20 px-8 max-w-[80rem] mx-auto">
      <h2 className="text-4xl text-center font-extrabold text-blue-950">
        See what WeClasses offers
      </h2>
      <div className="flex gap-10">
        <div className="flex flex-col gap-5">
          <img
            className="w-60"
            src="https://scdn.italki.com/ng/static/image/asgardhp/offers_01.png"
            alt=""
          />
          <strong className="text-blue-900 text-center  inline-block w-full text-lg">
            1-on-1 lessons
          </strong>
          <p className="text-justify">
            Find teachers from all over the world sharing their languages,
            dialects, and cultures.
          </p>
          <Link className="text-center text-light-blue font-bold " to="/">
            <div className="flex flex-row items-center">
              Find my teacher
              <FcNext />
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <img
            className="w-60"
            src="https://scdn.italki.com/ng/static/image/asgardhp/offers_04.png"
            alt=""
          />
          <strong className="text-blue-900 text-center  inline-block w-full text-lg">
            Group Class
          </strong>
          <p className="text-justify">
            Fun and engaging online group classes designed and led by expert
            teachers.
          </p>

          <Link className="text-center text-light-blue font-bold " to="/">
            <div className="flex flex-row items-center">
              View all classes
              <FcNext />
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <img
            className="w-60"
            src="https://scdn.italki.com/ng/static/image/asgardhp/offers_02.png"
            alt=""
          />
          <strong className="text-blue-900 text-center  inline-block w-full text-lg">
            Practice for free
          </strong>
          <p className="text-justify">
            Meet and share experiences with millions of language learners from
            more than 190 countries.
          </p>
          <Link className="text-center text-light-blue font-bold " to="/">
            <div className="flex flex-row items-center">
              Explore the Community
              <FcNext />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Offers;
