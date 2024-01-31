import usaFlag from "../../assets/icons/usa_flag.png";
import germanyFlag from "../../assets/icons/germany_flag.png";
import spainFlag from "../../assets/icons/spain_flag.png";
import franceFlag from "../../assets/icons/france_flag.png";

function FlagsBar() {
  return (
    <section className="pt-5 ">
      <div className="flex justify-around">
        <div className="flex flex-col p-2 justify-center">
          <img
            className="object-contain xs:w-5 md:w-10 xl:w-20 rounded-xl "
            src={usaFlag}
            alt=""
          />
          <strong className="text-center">Inglés</strong>
        </div>
        <div className="flex flex-col p-2">
          <img
            className="object-contain xs:w-5 md:w-10 xl:w-20 rounded-xl "
            src={germanyFlag}
            alt=""
          />
          <strong className="text-center">Alemán</strong>
        </div>
        <div className="flex flex-col p-2">
          <img
            className="object-contain xs:w-5 md:w-10 xl:w-20 rounded-xl "
            src={spainFlag}
            alt=""
          />
          <strong className="text-center">Español</strong>
        </div>
        <div className="flex flex-col p-2">
          <img
            className="object-contain xs:w-5 md:w-10 xl:w-20 rounded-xl "
            src={franceFlag}
            alt=""
          />
          <strong className="text-center">Francés</strong>
        </div>
      </div>

      <small className="block text-center py-5 lg:text-[1.5rem] font-extrabold">
        Tenemos profesores en más de 4 idiomas
      </small>
    </section>
  );
}

export default FlagsBar;
