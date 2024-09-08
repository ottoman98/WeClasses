import { Link } from "react-router-dom";

function Proposal() {
  return (
    <div
      className="grid justify-center content-center  bg-center 
    bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')]
    bg-cover h-[40rem]"
    >
      <div className="flex flex-col gap-5 text-white w-[33rem] text-center">
        <h2 className="text-5xl font-bold">
          Break language barriers and connect with the world
        </h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eius
          obcaecati! Illo, aperiam neque quis impedit incidunt officiis ut
          reprehenderit est dolorem inventore repudiandae omnis iusto, minus
          quod nostrum porro!
        </span>
        <div className="flex justify-center gap-4">
          <Link
            className="bg-blue-800 text-white py-2 px-4 rounded-xl"
            to="/classes"
          >
            Encuentra tu profe ideal
          </Link>
          <Link className="py-2 px-4" to="/about">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
