function AQ() {
  return (
    <section className=" flex flex-col py-10 px-40 bg-sky-100">
      <h2 className="text-center text-4xl font-bold">
        Frequently asked questions
      </h2>
      <div className="pt-10 flex flex-col gap-3 text-customBlack text-lg max-w-[80rem] mx-auto w-full">
        <details name="info">
          <summary className="font-extrabold border-b-[2px] border-blue-900 ">
            How does WeClasses Work
          </summary>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nulla
          tempore repellat numquam qui dicta, doloribus odio reprehenderit ullam
          tempora quia vel nihil voluptates ab ex veritatis itaque provident
          impedit.
        </details>
        <details name="info" className=" border-b-[2px] border-blue-900">
          <summary className="font-extrabold border-b-[1px]">
            How does WeClasses Work
          </summary>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nulla
          tempore repellat numquam qui dicta, doloribus odio reprehenderit ullam
          tempora quia vel nihil voluptates ab ex veritatis itaque provident
          impedit.
        </details>
        <details name="info" className=" border-b-[2px] border-blue-900">
          <summary className="font-extrabold border-b-[1px]">
            How does WeClasses Work
          </summary>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nulla
          tempore repellat numquam qui dicta, doloribus odio reprehenderit ullam
          tempora quia vel nihil voluptates ab ex veritatis itaque provident
          impedit.
        </details>
      </div>
    </section>
  );
}

export default AQ;
