import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { axiosRegisterTeacher } from "../../api/axios";
import { DataContextLanguage } from "../../context/language";
import countries from "../../utils/CountryCodes.json";
import { teacherData } from "../../types/teacher";
import { MdDelete } from "react-icons/md";

import { useNavigate } from "react-router-dom";

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
    getValues,
  } = useForm<teacherData>();

  //language
  const [languages, setLanguages] = useState([
    { language: "", level: "" },
    { language: "", level: "" },
  ]);

  useEffect(() => {
    register("languages", {
      required: {
        value: true,
        message: "ta vació",
      },
      validate: (value) => {
        const conditionLanguage = !value.some((x) => x.language == "");
        const conditionLevel = !value.some((x) => x.level == "");

        const native = value.some((x) => x.level == "native");

        if (conditionLanguage && conditionLevel) {
          if (native) {
            return true;
          } else {
            return "mínimo un nativo";
          }
        } else {
          return "todos los campos son obligatorios lenguaje y nivel";
        }
      },
    });
    setValue("languages", languages);
  }, [languages]);

  const navigate = useNavigate();
  useEffect(() => {
    if (serverResponse?.valid) {
      navigate(`/registerTeacher/${getValues("name")}`);
    }
  }, [serverResponse]);

  return (
    <>
      <div className="flex justify-center py-10 md:py-24">
        <form
          onSubmit={handleSubmit(async (x) => {
            const data = await axiosRegisterTeacher(x);
            setServerResponse(data.data);
          })}
          className="md:py-20 px-5 flex flex-col gap-10  md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl"
        >
          <p className="font-bold text-base">
            Regístrate para saber como podemos ayudarte
          </p>
          <div className="grid grid-cols-2 text-base gap-6">
            <div className="flex flex-col">
              <label className="font-bold text-xs md:text-base" htmlFor="name">
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
                className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
              />
              <p className="text-xs italic text-red-500">
                {errors.name?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                className="font-bold text-xs md:text-base"
                htmlFor="lastName"
              >
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
                className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
                id="lastName"
              />

              <p className="text-xs italic text-red-500">
                {errors.lastName?.message}
              </p>
            </div>
            <div className="col-span-2  flex flex-col">
              <label className="font-bold text-xs md:text-base" htmlFor="email">
                Email <span className="text-red-600">*</span>
              </label>

              <input
                className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl w-full text-xs md:text-base"
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
                {serverResponse?.message}
                {errors.email?.message}
              </p>
            </div>

            <div className="col-span-2 flex flex-row ">
              <div className="flex flex-col w-1/3 md:w-1/4 text-xs md:text-base">
                <label className="font-bold" htmlFor="countryCode">
                  Indicativo <span className="text-red-600">*</span>
                </label>
                <select
                  className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
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

              <div className="flex flex-col w-2/3 md:w-full">
                <label
                  className="font-bold text-xs md:text-base"
                  htmlFor="phone"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
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
              <label
                className="font-bold text-xs md:text-base"
                htmlFor="birthDay"
              >
                BirthDay <span className="text-red-600">*</span>
              </label>
              <input
                {...register("birthDay", {
                  required: { value: true, message: "Required" },
                })}
                className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
                type="date"
              />
              <p className="text-xs italic text-red-500">
                {errors.birthDay?.message}
              </p>
            </div>
            <div className="flex flex-col ">
              <label
                className="font-bold text-xs md:text-base"
                htmlFor="country"
              >
                Country <span className="text-red-600">*</span>
              </label>
              <select
                className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
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
                <label htmlFor="" className="text-xs md:text-base font-bold">
                  Languages
                </label>
              </div>

              {languages.map((x, i) => {
                return (
                  <div className="flex gap-2">
                    <select
                      className=" w-1/2 border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
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
                      className="w-2/5 border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
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
                    <div
                      className={`text-red-500  text-xs md:text-base flex flex-row items-center cursor-pointer ${
                        languages.length <= 2 ? "hidden" : ""
                      }`}
                      onClick={() => {
                        const updatedLanguages = [...languages];
                        updatedLanguages.splice(i, 1);
                        setLanguages(updatedLanguages);
                      }}
                    >
                      <MdDelete size={16} />
                      Delete
                    </div>
                  </div>
                );
              })}
              <p className="text-xs italic text-red-500">
                {errors.languages?.message}
              </p>
              <div className="mt-2 text-light-blue text-xs md:text-base">
                <span
                  onClick={() => {
                    setLanguages([...languages, { language: "", level: "" }]);
                  }}
                >
                  + Add another language
                </span>
              </div>
            </div>

            <div className="col-span-2">
              <input
                className="mr-2 leading-tight checked:bg-blue-950 rounded-xl"
                required
                type="checkbox"
                id="privacy"
              />
              <label htmlFor="privacy" className="text-xs md:text-base">
                Si, he leído y comprendido cómo EF procesa mis datos personales
                tal y como establece la{" "}
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
