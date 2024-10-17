import { useContext } from "react";

import { DataContextLanguage } from "../../../context/language";
import Loading from "../../partials/Loading";
function Faq() {
  const { translation } = useContext(DataContextLanguage);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-700 lg:text-3xl dark:text-white">
            Frequently asked questions
          </h1>
          <div className="mt-12 space-y-8">
            {translation ? (
              translation.main.frequentlyQuestions.QA.map((x) => {
                return (
                  <>
                    <details className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                      <summary className="flex items-center justify-between w-full p-8">
                        <h1 className="font-semibold text-gray-700 dark:text-white">
                          {x.question}
                        </h1>
                        <span className="text-gray-400 bg-gray-200 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M18 12H6"
                            />
                          </svg>
                        </span>
                      </summary>

                      <hr className="border-gray-200 dark:border-gray-700" />

                      <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                        {x.answer}
                      </p>
                    </details>
                  </>
                );
              })
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
