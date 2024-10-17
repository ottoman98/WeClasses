import Loading from "../partials/Loading";
import StoryCard from "./StoryCard";
import { GetAllStories } from "../../api/axiosStories";
import { useContext } from "react";
import { DataContextStoriesLanguage } from "../../context/stories/storiesLanguage";

function AllStories() {
  const data = GetAllStories();
  let filter;
  const { name } = useContext(DataContextStoriesLanguage);

  if (data) {
    filter = data.filter((x) => x.language == name);
  }
  console.log(name);

  return (
    <section className="flex flex-col px-10 py-5">
      <div className="flex gap-3 flex-col">
        <h3 className="text-2xl font-semibold text-light-blue">
          Textos en inglés con ejercicios de comprensión lectora
        </h3>
        <div className="grid grid-cols-2 ">
          <img
            className="mx-auto"
            src="https://lingua.com/images/1.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <p>
              Textos en inglés con ejercicios de comprensión de lectura para
              todos los niveles. Lecturas básicas en inglés para practicar el
              vocabulario y la gramática. Aquí encontrarás textos para
              principiantes, escritos por experimentados profesores de inglés.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, blanditiis! Aliquam, adipisci voluptas modi iste eius
              reiciendis omnis animi a, non vitae eos nam commodi numquam
              voluptatem quis! Omnis, commodi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, blanditiis! Aliquam, adipisci voluptas modi iste eius
              reiciendis omnis animi a, non vitae eos nam commodi numquam
              voluptatem quis! Omnis, commodi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, blanditiis! Aliquam, adipisci voluptas modi iste eius
              reiciendis omnis animi a, non vitae eos nam commodi numquam
              voluptatem quis! Omnis, commodi?
            </p>
          </div>
          <p className="col-span-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            commodi enim quisquam accusamus. Praesentium officiis, blanditiis
            impedit voluptate laborum veniam aperiam! Reprehenderit, nisi!
            Obcaecati quisquam voluptatem expedita laboriosam error accusantium.
          </p>
        </div>
      </div>
      <div className="py-8 relative ">
        <ul className="flex gap-2 ml-2 top-4  z-20 absolute ">
          <li className="rounded-t-md px-1 border-x-4 border-t-4 border-light-blue bg-gray-100 cursor-pointer font-semibold">
            Gratuitas
          </li>
          <li className="rounded-t-md px-1 border-x-4 border-t-4  border-light-blue cursor-pointer font-semibold bg bg-yellow-200">
            Premium
          </li>
        </ul>
        <div className=" border-4 border-light-blue p-2 rounded-md px-1">
          <div className="py-5 px-3 flex flex-col justify-center gap-2">
            <h2 className="text-xl font-semibold">A1-A2</h2>
            <div className="grid grid-cols-2 gap-x-4  ">
              {!filter ? (
                <Loading />
              ) : (
                filter.map((x) => {
                  if (x.level == "A1-A2")
                    return (
                      <div className="bgr">
                        <StoryCard story={x} />
                      </div>
                    );
                })
              )}
            </div>
          </div>
          <div className="py-5 px-3 flex flex-col justify-center gap-2">
            <h2 className="text-xl font-semibold">B1-B2</h2>
            <div className="grid grid-cols-2 gap-x-4  ">
              {!filter ? (
                <Loading />
              ) : (
                filter.map((x) => {
                  if (x.level == "B1-B2")
                    return (
                      <div className="bgr">
                        <StoryCard story={x} />
                      </div>
                    );
                })
              )}
            </div>
          </div>
          <div className="py-5 px-3 flex flex-col justify-center gap-2">
            <h2 className="text-xl font-semibold">C1-C2</h2>
            <div className="grid grid-cols-2 gap-x-4  ">
              {!filter ? (
                <Loading />
              ) : (
                filter.map((x) => {
                  if (x.level == "C1-C2") return <StoryCard story={x} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllStories;
