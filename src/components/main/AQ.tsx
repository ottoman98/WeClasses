import { useContext } from "react";

import { DataContextLanguage } from "../../context/language";

function AQ() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <section className=" flex flex-col py-10 px-4 md:px-40 bg-sky-100">
      <h2 className="text-center text-4xl font-bold">
        Frequently asked questions
      </h2>
      <div className="pt-10 flex flex-col gap-3 text-customBlack text-lg max-w-[80rem] mx-auto w-full">
        {translation ? (
          translation.main.frequentlyQuestions.QA.map((x) => {
            return (
              <details
                name="info"
                className=" border-b-[2px] text-sm border-blue-900 py-2"
              >
                <summary className="font-extrabold border-b-[1px] py-2">
                  {x.question}
                </summary>
                {x.answer}
              </details>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default AQ;
