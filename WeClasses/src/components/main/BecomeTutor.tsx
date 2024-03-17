import Button from "../partials/Button";
import foto from "../../assets/images/dama.jpg";

function BecomeTutor() {
  return (
    <section className="p-5 max-w-[80rem] mx-auto">
      <div
        className="flex mx-auto rounded-xl border-[1px] border-light-blue
      "
      >
        <img className="w-1/2 rounded-l-xl object-cover" src={foto} alt="" />
        <div className="px-7 pt-10 flex flex-col gap-6 w-1/2">
          <h2 className="text-[6rem] leading-[5rem] font-bold ">
            Become a tutor
          </h2>
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
