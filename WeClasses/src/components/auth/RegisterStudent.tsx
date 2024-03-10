import { contact } from "../../types/userTypes";
import { useForm } from "react-hook-form";
import { ReactNode, useContext, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { axiosRegisterStudent } from "../../api/axios";
import ModalWithButton from "./ModalWithButton";
import { DataContextLanguage } from "../../context/language";
import countries from "../../utils/CountryCodes.json";
import { FcApproval } from "react-icons/fc";

function Register() {
  const { translation } = useContext(DataContextLanguage);
  const [serverResponse, setServerResponse] = useState<{
    message: string;
    valid: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<contact>();

  let bool = false;

  if (serverResponse !== null && serverResponse.valid) {
    bool = true;
  }
  const message: ReactNode = (
    <>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        Gracias por preferirnos te enviamos un correo a {"  "}
        <strong className="underline text-red-600">
          {" "}
          {serverResponse?.message}
        </strong>{" "}
        para que culmines tu registro.
      </p>
    </>
  );

  return (
    <>
      <ModalWithButton show={bool} message={message} />
      <div className="py-20">
        <h2 className="text-6xl text-center font-bold text-blue-950">
          La plataforma de idiomas más efectiva del mundo
        </h2>
        <div className="flex gap-10 justify-around p-10 ">
          <div className="border-4 p-5  border-light-blue rounded-lg text-xl w-1/3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-2">
            <h3 className=" font-bold text-blue-950">Mejora tus habilidades</h3>
            <p className="font-bold">Lorem ipsum dolor sit,?aaaaaaaaaaaaaaa</p>
            <ul className="py-5 flex flex-col gap-3">
              <li className="flex flex-row">
                <FcApproval size={45} className="flex -mt-2 px-1" />
                Obtén retroalimentación personalizada en cada clase privada
              </li>
              <li className="flex flex-row">
                <FcApproval size={45} className="flex -mt-2 px-1" />
                Obtén retroalimentación personalizada en cada clase privada
              </li>
              <li className="flex flex-row">
                <FcApproval size={45} className="flex -mt-2 px-1" />
                Obtén retroalimentación personalizada en cada clase privada
              </li>
              <li className="flex flex-row">
                <FcApproval size={45} className="flex -mt-2 px-1" />
                Obtén retroalimentación personalizada en cada clase privada
              </li>
            </ul>
            <p>
              Ofrecemos <strong>una garantía de satisfacción</strong> , porque
              aqui lo que sobra es billete
            </p>
          </div>
          <form
            onSubmit={handleSubmit(async (x) => {
              const data = await axiosRegisterStudent(x);
              setServerResponse(data.data);
            })}
            className=" py-20 px-5 flex flex-col gap-10 w-2/3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl"
          >
            <p className="font-bold text-base">
              Registrate para saber como podemos ayudarte
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
                  {serverResponse?.message}
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

              <div className="flex flex-col">
                <label className="font-bold" htmlFor="name">
                  Language to learn <span className="text-red-600">*</span>
                </label>
                <select
                  className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
                  {...register("languageToLearn", {
                    required: { value: true, message: "Required" },
                    validate: (value) => {
                      return (
                        value !== getValues("nativeLanguage") ||
                        "los Idiomas deben ser diferentes"
                      );
                    },
                  })}
                  id="name"
                >
                  <option value="">
                    {translation.register.form.languageToLearn}
                  </option>
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
                <p className="text-xs italic text-red-500">
                  {errors.languageToLearn?.message}
                </p>
              </div>
              <div className="flex flex-col">
                <label className="font-bold" htmlFor="name">
                  Native language <span className="text-red-600">*</span>
                </label>
                <select
                  className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
                  {...register("nativeLanguage", {
                    required: { value: true, message: "Required" },
                  })}
                  id="name"
                >
                  <option value="">
                    {translation.register.form.nativeLanguage}
                  </option>
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

                <p className="text-xs italic text-red-500">
                  {errors.nativeLanguage?.message}
                </p>
              </div>
              <div className="col-span-2">
                <input
                  className="mr-2 leading-tight checked:bg-blue-950 rounded-xl"
                  type="checkbox"
                  id="privacy"
                />
                <label htmlFor="privacy">
                  Si, he leído y comprendido cómo EF procesa mis datos
                  personales tal y como establece la
                  <span className="font-bold text-blue-950">
                    {" "}
                    politica de privacidad
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
      </div>
    </>
  );
}

export default Register;
