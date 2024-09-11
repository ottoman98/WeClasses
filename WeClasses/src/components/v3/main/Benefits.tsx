import img from "../../../assets/carousel/slide3.jpg";

function Benefits() {
  return (
    <>
      <section>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center ">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-700 dark:text-white lg:text-4xl">
                Learn a New Language with Our Expert Instructors
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                Unlock the world of languages through our comprehensive online
                platform. Whether you're a beginner or looking to enhance your
                skills, our tailored lessons are designed to meet your learning
                needs.
              </p>
              <div className="grid gap-6 mt-8 sm:grid-cols-2 ">
                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3 text-light-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3 text-gray-500">
                    Personalized Learning Paths
                  </span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3 text-light-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3 text-gray-500">
                    Qualified Instructors
                  </span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3 text-light-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3 text-gray-500">
                    Flexible Scheduling
                  </span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3 text-light-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3 text-gray-500">
                    Interactive Learning Tools
                  </span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3 text-light-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3 text-gray-500">Affordable Pricing</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mx-3 text-light-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3 text-gray-500">Security payment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full max-w-2xl rounded-md"
              src={img}
              alt="glasses photo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Benefits;
