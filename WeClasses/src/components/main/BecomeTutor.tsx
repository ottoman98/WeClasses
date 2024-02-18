import Button from "../partials/Button";

function BecomeTutor() {
  return (
    <section className="p-5">
      <div
        className="flex mx-auto rounded-xl border-[1px] border-light-blue
      "
      >
        <img
          className="w-1/2 rounded-l-xl"
          src="https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=700/https://static.preply.com/static/ssr/_next/static/images/tutor-23-ff1686e2d5b9b40017cfeb0afa8e15f8.jpg"
          alt=""
        />
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
          <Button content="Become tutor" link="/" />
          <span className="text-center underline font-bold">
            How out platform works
          </span>
        </div>
      </div>
    </section>
  );
}

export default BecomeTutor;
