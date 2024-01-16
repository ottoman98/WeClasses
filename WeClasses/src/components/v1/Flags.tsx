import usaFlag from "../../assets/usa_flag.png";
import germanyFlag from "../../assets/germany_flag.png";
import spainFlag from "../../assets/spain_flag.png";
import franceFlag from "../../assets/france_flag.png";

function FlagsBar() {
  return (
    <section>
      <div className="flex justify-around">
        <div className="flex flex-col p-14">
          <img
            className="object-contain w-20 rounded-xl "
            src={usaFlag}
            alt=""
          />
          <strong className="text-center">ingles</strong>
        </div>
        <div className="flex flex-col p-14">
          <img
            className="object-contain w-20 rounded-xl "
            src={germanyFlag}
            alt=""
          />
          <strong className="text-center">Alemán</strong>
        </div>
        <div className="flex flex-col p-14">
          <img
            className="object-contain w-20 rounded-xl "
            src={spainFlag}
            alt=""
          />
          <strong className="text-center">Español</strong>
        </div>
        <div className="flex flex-col p-14">
          <img
            className="object-contain w-20 rounded-xl "
            src={franceFlag}
            alt=""
          />
          <strong className="text-center">Frances</strong>
        </div>
      </div>

      <small className="block text-center">
        Tenemos profesores en mas 70 idiomas
      </small>
    </section>
  );
}

export default FlagsBar;
