import { Link, useParams } from "react-router-dom";
import { GetClasseById } from "../../api/axiosClasses";

function ClassInfo() {
  const { id } = useParams();

  const classe = GetClasseById(id);
  console.log(classe);

  if (!classe) {
    return <>Loading</>;
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-2 px-2 md:px-32 py-10">
        <div>
          <h2 className="text-3xl">{classe.name}</h2>
          <ul>
            <li>
              Teacher:{" "}
              <Link to={`/teacher/${classe.user}`}>{classe.teacherName}</Link>{" "}
            </li>
            <li>Level: {classe.level}</li>
            <li>Price: {classe.price}$</li>
            <li>Idioma:{classe.language == "en" ? "English" : "Spanish"}</li>
            <li>Teacher: {classe.teacherName}</li>
            <li>
              Date:{" "}
              {new Date(classe.date).toLocaleDateString() +
                " " +
                new Date(classe.date).toLocaleTimeString()}
            </li>
            <li>Duration: {classe.duration} horas</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            className="w-32 rounded-3xl"
            src="https://avatars.preply.com/i/logos/i/logos/avatar_966e0g3tm3i.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-2 col-span-2">
          <button className="bg-blue-900 text-white">Book Lesson</button>
          <button className="bg-blue-900 text-white">Send Message</button>
        </div>
      </div>
    </>
  );
}

export default ClassInfo;
