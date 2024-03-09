import { useForm } from "react-hook-form";
import { ReactNode, useContext, useEffect, useState } from "react";
import { axiosRegisterTeacher } from "../../api/axios";
import ModalWithButton from "./ModalWithButton";
import { DataContextLanguage } from "../../context/language";
import countries from "../../utils/CountryCodes.json";
import { teacherData } from "../../types/teacher";

function RegisterTeachers() {
  const { translation } = useContext(DataContextLanguage);
  const [serverResponse, setServerResponse] = useState<{
    message: string;
    valid: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<teacherData>();

  let bool = false;

  if (serverResponse !== null && serverResponse.valid) {
    bool = true;
  }

  //language
  const [languages, setLanguages] = useState([
    { language: "", level: "" },
    { language: "", level: "" },
  ]);

  useEffect(() => {
    setValue("languages", languages);
  }, [languages]);

  const message: ReactNode = (
    <>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        Gracias por preferirnos te enviamos un correo a {"  "}
        <strong className="underline text-red-600">
          {serverResponse?.message}
        </strong>
        para que culmines tu registro.
      </p>
    </>
  );

  return (
    <>
      <ModalWithButton show={bool} message={message} />
      <div className="flex justify-center py-24">
        <form
          onSubmit={handleSubmit(async (x) => {
            console.log(x);
            const data = await axiosRegisterTeacher(x);
            setServerResponse(data.data);
          })}
          className=" py-20 px-5 flex flex-col gap-10 w-2/3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl"
        >
          <p className="font-bold text-base">
            Regístrate para saber como podemos ayudarte
          </p>
          <div className="grid grid-cols-2 text-base gap-6">
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Required ",
                  },
                })}
                type="text"
                placeholder={translation.register.form.name}
                className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
              />
              <p className="text-xs italic text-red-500">
                {errors.name?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="">
                LastName <span className="text-red-600">*</span>
              </label>
              <input
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Required ",
                  },
                })}
                type="text"
                placeholder={translation.register.form.lastName}
                className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
                id="lastName"
              />

              <p className="text-xs italic text-red-500">
                {errors.lastName?.message}
              </p>
            </div>
            <div className="col-span-2  flex flex-col">
              <label className="font-bold" htmlFor="name">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl w-full"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Required field",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:
                      "Debe ingresar un correo de la forma Ej. example@examples.ex",
                  },
                })}
                type="email"
                placeholder={translation.register.form.email}
              />
              <p className="text-xs italic text-red-500">
                {errors.email?.message}
                {serverResponse?.message == "exist"
                  ? "This email alredy Exist"
                  : ""}
              </p>
            </div>

            <div className="col-span-2 flex flex-row ">
              <div className="flex flex-col w-1/4">
                <label className="font-bold" htmlFor="name">
                  Indicativo <span className="text-red-600">*</span>
                </label>
                <select
                  className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
                  {...register("countryCode", {
                    required: { value: true, message: "Required" },
                  })}
                >
                  <option value="">
                    {translation.register.form.countryCode}
                  </option>
                  {countries.map((x) => {
                    return (
                      <option value={x.dial_code}>
                        {x.dial_code} {x.name}
                      </option>
                    );
                  })}
                </select>
                <p className="text-xs italic text-red-500">
                  {errors.countryCode?.message}
                </p>
              </div>

              <div className="flex flex-col w-full">
                <label className="font-bold" htmlFor="name">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl "
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                  type="number"
                  placeholder={translation.register.form.phone}
                />

                <p className="text-xs italic text-red-500">
                  {errors.phone?.message}
                </p>
              </div>
            </div>

            <div className="flex flex-col ">
              <label className="font-bold" htmlFor="name">
                BirthDay <span className="text-red-600">*</span>
              </label>
              <input
                {...register("birthDay", {
                  required: { value: true, message: "Required" },
                })}
                className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl "
                type="date"
              />
              <p className="text-xs italic text-red-500">
                {errors.countryCode?.message}
              </p>
            </div>
            <div className="flex flex-col ">
              <label className="font-bold" htmlFor="name">
                Country <span className="text-red-600">*</span>
              </label>
              <select
                className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
                {...register("country", {
                  required: { value: true, message: "Required" },
                })}
              >
                <option value="">seleccione país</option>
                {countries.map((x) => {
                  return <option value={x.name}>{x.name}</option>;
                })}
              </select>
              <p className="text-xs italic text-red-500">
                {errors.countryCode?.message}
              </p>
            </div>

            <div className="flex flex-col col-span-2 gap-1">
              <div className="flex gap-20">
                <label htmlFor="">Languages</label>
              </div>

              {languages.map((x, i) => {
                return (
                  <div>
                    <select
                      required={true}
                      className="w-1/2 border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
                      id="language"
                      value={x.language}
                      onChange={(e) => {
                        const value = e.target.value;

                        const onChangeValue = [...languages];
                        onChangeValue[i].language = value;
                        setLanguages(onChangeValue);
                      }}
                    >
                      <option value="">Seleccione idioma</option>
                      <option value="es">Español</option>
                      <option value="en">English</option>
                      <option value="fr">Français</option>
                      <option value="zh">中文 (Chino Mandarín)</option>
                      <option value="hi">हिन्दी (Hindi)</option>
                      <option value="ar">العربية (Árabe)</option>
                      <option value="pt">Português</option>
                      <option value="bn">বাংলা (Bengalí)</option>
                      <option value="ru">Русский (Ruso)</option>
                      <option value="ur">اردو (Urdu)</option>
                      <option value="de">Deutsch</option>
                      <option value="ja">日本語 (Japonés)</option>
                      <option value="ko">한국어 (Coreano)</option>
                      <option value="vi">Tiếng Việt (Vietnamita)</option>
                    </select>
                    <select
                      required={true}
                      className="w-2/5 border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
                      id="level"
                      value={x.level}
                      onChange={(e) => {
                        const value = e.target.value;
                        const onChangeValue = [...languages];
                        onChangeValue[i].level = value;
                        setLanguages(onChangeValue);
                      }}
                    >
                      <option value="">Seleccione Nivel</option>
                      <option value="A1">A1: Beginner</option>
                      <option value="A2">A2: Elementary</option>
                      <option value="B1">B1: Intermediate</option>
                      <option value="B2">B2: Upper Intermediate</option>
                      <option value="C1">C1: Advance</option>
                      <option value="C2">C2: Proficient</option>
                      <option value="native">Native</option>
                    </select>

                    <span
                      onClick={() => {
                        const updatedLanguages = [...languages];
                        updatedLanguages.splice(i, 1);
                        setLanguages(updatedLanguages);
                      }}
                    >
                      Delete
                    </span>
                  </div>
                );
              })}

              <p
                onClick={() => {
                  setLanguages([...languages, { language: "", level: "" }]);
                }}
                className="mt-2 text-light-blue"
              >
                + Add another language
              </p>
            </div>

            <div className="col-span-2">
              <input
                className="mr-2 leading-tight checked:bg-blue-950 rounded-xl"
                type="checkbox"
                id="privacy"
              />
              <label htmlFor="privacy">
                Si, he leído y comprendido cómo EF procesa mis datos personales
                tal y como establece la
                <span className="font-bold text-blue-950">
                  política de privacidad
                </span>
                <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="col-span-2 flex">
              <button className="bg-blue-950 text-white px-10 py-1 text-xl mx-auto rounded-xl">
                {translation.register.form.submit}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterTeachers;
