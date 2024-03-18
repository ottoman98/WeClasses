import Button from "../partials/Button";
import foto from "../../assets/images/dama.jpg";

function BecomeTutor() {
  return (
    <section className="md:p-5 max-w-[80rem] mx-auto bg-light-blue md:bg-white text-white md:text-blue-950">
      <div className="flex flex-col md:flex-row mx-auto md:rounded-xl md:border-[1px] border-light-blue bg-red">
        <img
          className="md:w-1/2 md:rounded-l-xl object-cover"
          src={foto}
          alt=""
        />
        <div className="px-7 py-10  flex flex-col gap-6 md:w-1/2">
          <h2 className="text-3xl md:text-7xl font-bold ">Become a tutor</h2>
          <p>
            Earn money sharing your expert knowledge with students. Sign up to
            start tutoring online with WeClasses
          </p>
          <ul className="list-disc font-bold text-2xl flex flex-col gap-4 pl-6">
            <li>Find new students</li>
            <li>Grow your business</li>
            <li>Get paid securely</li>
          </ul>
          <Button content="Become tutor" link="/register_tutor" />
          <span className="text-center underline font-bold">
            How out platform works
          </span>
        </div>
      </div>
    </section>
  );
}

export default BecomeTutor;
