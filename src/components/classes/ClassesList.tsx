import { useContext, useState } from "react";
import { GetAllClasses } from "../../api/axiosClasses";
import ClassesCard from "./ClassesCard";
import { DataContextLanguage } from "../../context/language";

function ClassesList() {
  const minDate = new Date().toISOString().split("T")[0];
  const classes = GetAllClasses();
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [date, setDate] = useState("");
  const [dayTime, setDaytime] = useState(0);

  const { translation } = useContext(DataContextLanguage);

  let filtered = classes;

  if (language != "") {
    const byLanguage = filtered?.filter((x) => x.language == language);

    filtered = byLanguage;
  }

  if (level != "") {
    const byLanguage = filtered?.filter((x) => x.level == level);

    filtered = byLanguage;
  }

  if (date !== "") {
    const byDate = filtered?.filter((x) => new Date(x.date) > new Date(date));

    filtered = byDate;
  }
  console.log(dayTime);
  if (dayTime !== 0) {
    const byDateTime = filtered?.filter((x) => {
      const hour = new Date(x.date).getHours();
      console.log(x.name, ":", hour);
      if (dayTime == 6) {
        return hour >= 6 && hour < 12;
      }
      if (dayTime == 12) {
        return hour >= 12 && hour < 19;
      }
      if (dayTime == 19) {
        return (hour >= 19 && hour <= 24) || (hour >= 0 && hour < 6);
      } else {
        return x;
      }
    });
    filtered = byDateTime;
  }

  return (
    <section className="flex flex-col gap-10 py-16  mx-auto bg-gray-100">
      <div className="bg-[url('https://cdn.pixabay.com/photo/2024/03/29/17/43/ai-generated-8663299_1280.png')] bg-cover bg-center py-56">
        <h2 className="text-2xl md:text-5xl text-center font-bold text-white">
          {translation.classes.title}
        </h2>
      </div>
      <div className="max-w-[80rem] mx-auto">
        <div className=" flex flex-col gap-4 ">
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 text-xs">
            <select
              className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs"
              name=""
              id=""
              onChange={(e) => {
                const selected = e.target.value;
                setLanguage(selected);
              }}
              value={language}
            >
              <option value="">Selecciona un idioma</option>
              <option value="zh">Mandarín</option>
              <option value="es">Español</option>
              <option value="en">Inglés</option>
              <option value="ar">Árabe</option>
              <option value="pt">Portugués</option>
              <option value="ru">Ruso</option>
              <option value="ja">Japonés</option>
              <option value="fr">Francés</option>
              <option value="de">Alemán</option>
              <option value="tr">Turco</option>
              <option value="it">Italiano</option>
            </select>
            <select
              className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs "
              name=""
              id=""
              onChange={(e) => {
                const selected = e.target.value;
                setLevel(selected);
              }}
              value={level}
            >
              <option value="">{translation.classes.filters.levels[0]}</option>
              <option value="A1-A2">
                {translation.classes.filters.levels[1]}
              </option>
              <option value="B1-B2">
                {translation.classes.filters.levels[2]}
              </option>
              <option value="C1-C2">
                {translation.classes.filters.levels[3]}
              </option>
            </select>
            <input
              min={minDate}
              onChange={(e) => {
                const selected = e.target.value;
                setDate(selected);
              }}
              className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs"
              type="date"
              value={date}
            />

            <select
              className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs"
              name=""
              id=""
              onChange={(e) => {
                const selected = +e.target.value;
                setDaytime(selected);
              }}
              value={dayTime}
            >
              <option value={0}>
                {translation.classes.filters.dayTime[0]}
              </option>
              <option value={6}>
                {translation.classes.filters.dayTime[1]} (6:00 am - 12:00 pm)
              </option>
              <option value={12}>
                {translation.classes.filters.dayTime[2]} (12:00 - 07:00 pm)
              </option>
              <option value={19}>
                {translation.classes.filters.dayTime[3]} (7:00 pm - 6:00 am)
              </option>
            </select>
            <button
              className="bg-light-blue text-white rounded-md py-2 hover:bg-blue-800 text-xs "
              onClick={() => {
                setLanguage("");
                setLevel("");
                setDate("");
                setDaytime(0);
              }}
            >
              {translation.classes.filters.reset}
            </button>
          </div>
          {filtered?.length && filtered.length > 0 ? (
            <span className="font-bold text-lg">
              {filtered?.length} {translation.classes.body.title}
            </span>
          ) : (
            ""
          )}
        </div>

        {filtered?.length && filtered.length > 0 ? (
          <div className="flex flex-col gap-5 ">
            {filtered?.map((x) => {
              return <ClassesCard complement={true} data={x} key={x._id} />;
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-4 px-2 md:px-20">
            <strong className="text-xl">
              {translation.classes.body.notMatch.title}
            </strong>
            <span> {translation.classes.body.notMatch.info}</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default ClassesList;
