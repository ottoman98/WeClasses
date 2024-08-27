import { contact } from "../../types/userTypes";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { axiosRegisterStudent } from "../../api/axios";
import { DataContextLanguage } from "../../context/language";
import countries from "../../utils/CountryCodes.json";
import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

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

  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (!serverResponse?.valid) {
      setDisabled(false);
    } else {
      navigate(`/register/${getValues("name")}`);
    }
  }, [serverResponse]);

  return (
    <>
      <section className="py-20 pt-24 bg-[url('https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-screen">
        <div className="max-w-[80rem] mx-auto">
          <h2 className="text-4xl md:text-6xl text-center font-bold text-blue-950">
            {translation.forms.student.title}
          </h2>
          <div className="flex flex-col-reverse md:flex-row gap-10 justify-around md:p-10 ">
            <div className="p-5 rounded-lg text-xl md:w-1/3  flex flex-col gap-2 bg-[rgba(23,37,84,0.9)] text-white">
              <h3 className=" font-bold ">
                {" "}
                {translation.forms.student.aside.title}
              </h3>

              <ul className="py-5 flex flex-col gap-3">
                {translation.forms.student.aside.items
                  ? translation.forms.student.aside.items.map((x) => {
                      return (
                        <li className="flex flex-row">
                          <FcApproval size={45} className="flex -mt-2 px-1" />
                          {x}
                        </li>
                      );
                    })
                  : ""}
              </ul>
            </div>
            <form
              onSubmit={handleSubmit(async (x) => {
                setDisabled(true);
                const data = await axiosRegisterStudent(x);
                setServerResponse(data.data);
              })}
              className=" py-20 px-5 flex flex-col gap-10 md:w-2/3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl bg-[rgba(23,37,84,0.9)]"
            >
              <div className="grid grid-cols-2 text-xs md:text-base gap-6 ">
                <div className="flex flex-col">
                  <label className="font-bold text-white " htmlFor="name">
                    {translation.forms.student.form.name}{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    disabled={disabled}
                    id="name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Required ",
                      },
                    })}
                    type="text"
                    placeholder={translation.forms.student.form.name}
                    className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
                  />
                  <p className="text-xs italic text-red-500">
                    {errors.name?.message}
                  </p>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold text-white" htmlFor="lastName">
                    {translation.forms.student.form.lastName}{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Required ",
                      },
                    })}
                    type="text"
                    placeholder={translation.forms.student.form.lastName}
                    className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
                    id="lastName"
                  />

                  <p className="text-xs italic text-red-500">
                    {errors.lastName?.message}
                  </p>
                </div>
                <div className="col-span-2  flex flex-col">
                  <label className="font-bold text-white" htmlFor="email">
                    {translation.forms.student.form.email}{" "}
                    <span className="text-red-600">*</span>
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
                    placeholder={translation.forms.student.form.email}
                  />
                  <p className="text-xs italic text-red-500">
                    {errors.email?.message}
                    {serverResponse?.message}
                  </p>
                </div>

                <div className="col-span-2 flex flex-row gap-1">
                  <div className="flex flex-col w-1/3 md:w-1/4">
                    <label className="font-bold text-white" htmlFor="code">
                      Indicativo <span className="text-red-600">*</span>
                    </label>
                    <select
                      className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
                      {...register("countryCode", {
                        required: { value: true, message: "Required" },
                      })}
                    >
                      <option value="">
                        {translation.forms.student.form.countryCode}
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
                    <label className="font-bold text-white" htmlFor="phone">
                      {translation.forms.student.form.phone}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base "
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Required",
                        },
                      })}
                      type="number"
                      placeholder={translation.forms.student.form.phone}
                    />

                    <p className="text-xs italic text-red-500">
                      {errors.phone?.message}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-bold text-white"
                    htmlFor="languageToLearn"
                  >
                    {translation.forms.student.form.languageToLearn}
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
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
                      {translation.forms.student.form.languageToLearn}
                    </option>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                  </select>
                  <p className="text-xs italic text-red-500">
                    {errors.languageToLearn?.message}
                  </p>
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-bold text-white"
                    htmlFor="nativeLanguage"
                  >
                    {translation.forms.student.form.nativeLanguage}
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
                    {...register("nativeLanguage", {
                      required: { value: true, message: "Required" },
                    })}
                    id="name"
                  >
                    <option value="">
                      {translation.forms.student.form.nativeLanguage}
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
                    required
                  />
                  <label className="text-white" htmlFor="privacy">
                    {translation.forms.student.privacy}

                    <span className="font-bold text-light-blue">
                      {" "}
                      politica de privacidad
                    </span>
                    <span className="text-red-600">*</span>
                  </label>
                </div>
                <div className="col-span-2 flex">
                  <button className="bg-white px-10 py-1 text-xl mx-auto rounded-xl hover:scale-105">
                    {translation.forms.student.button}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
