import { useParams } from "react-router-dom";
import { AxiosGetRemainingData, axiosPutRemainingData } from "../../api/axios";
import { useForm } from "react-hook-form";
import { fullContact } from "../../types/userTypes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import countries from "../../utils/CountryCodes.json";

function UserRemainingForm() {
  const {
    setValue,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<fullContact>();
  const { id } = useParams();

  const [serverResponse, setServerResponse] = useState<{
    message: string;
    valid: string;
  } | null>(null);

  const data = AxiosGetRemainingData(id);

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("lastName", data.lastName);
      setValue("email", data.email);
      setValue("phone", data.phone);
      setValue("nativeLanguage", data.nativeLanguage);
      setValue("languageToLearn", data.languageToLearn);
      setValue("countryCode", "+" + data.countryCode);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!serverResponse?.valid) {
      setDisabled(false);
    } else {
      navigate(`/registerComplete/${getValues("name")}`);
    }
  }, [serverResponse]);

  return (
    <>
      <div className="min-h-screen p-6 bg-gradient-to-tr from-blue-900 to-light-blue flex items-center justify-center ">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-10 ">
            <h2 className="font-semibold text-6xl text-white text-center">
              Completa tus datos y empieza a aprender hoy mismo!
            </h2>
            <div className="bg-gray-100  shadow-lg p-4 px-4 md:p-8 mb-6 rounded-xl">
              <div className="text-sm ">
                <div className="lg:col-span-2 ">
                  <form
                    onSubmit={handleSubmit(async (x) => {
                      const data = await axiosPutRemainingData(id, x);
                      setServerResponse(data.data);
                      setDisabled(true);
                    })}
                    className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 "
                  >
                    <div className="flex flex-col ">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        disabled={disabled}
                        {...register("name", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="name"
                        type="text"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.name?.message}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        disabled={disabled}
                        {...register("lastName", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="lastName"
                        type="text"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.lastName?.message}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="email"
                      >
                        Email
                      </label>

                      <input
                        disabled={disabled}
                        {...register("email", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="email"
                        type="text"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.email?.message}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="country"
                      >
                        Country
                      </label>
                      <select
                        disabled={disabled}
                        {...register("country", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="country"
                      >
                        <option value="">Select </option>
                        {countries.map((x) => {
                          return <option value={x.name}>{x.name}</option>;
                        })}
                      </select>
                      <p className="text-xs italic text-red-500">
                        {errors.country?.message}
                      </p>
                    </div>
                    <div className="flex flex-row gap-1">
                      <div className="flex flex-col w-1/3 gap">
                        <label
                          className="block text-sm font-medium leading-6 text-customBlack"
                          htmlFor="countryCode"
                        >
                          Indicativo
                        </label>

                        <select
                          disabled={disabled}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          id="countryCode"
                          {...register("countryCode", {
                            required: { value: true, message: "Required" },
                          })}
                        >
                          <option value="">Indicativo</option>
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
                      <div className="w-2/3 md:w-full">
                        <label
                          className="block text-sm font-medium leading-6 text-customBlack"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          disabled={disabled}
                          {...register("phone", {
                            required: { value: true, message: "Required" },
                          })}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          id="name"
                          type="text"
                        />
                        <p className="text-xs italic text-red-500">
                          {errors.phone?.message}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="nativeLanguage"
                      >
                        Native Language
                      </label>
                      <select
                        disabled={disabled}
                        {...register("nativeLanguage", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="name"
                      >
                        <option value="">Escoja su idioma nativo</option>
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

                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="languageToLearn"
                      >
                        Language to learn
                      </label>
                      <select
                        disabled={disabled}
                        {...register("languageToLearn", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="name"
                      >
                        <option value="">
                          Seleccione su idioma a aprender
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
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="languageLevel"
                      >
                        Language Level
                      </label>
                      <select
                        disabled={disabled}
                        {...register("languageLevel", {
                          required: { value: true, message: "Required" },
                        })}
                        id="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option value="">Escoja uno</option>
                        <option value="A1-A2">A1-A2</option>
                        <option value="B1-B2">B1-B2</option>
                        <option value="C1-C2">C1-C2</option>
                      </select>
                      <p className="text-xs italic text-red-500">
                        {errors.languageLevel?.message}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        disabled={disabled}
                        {...register("password", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="name"
                        type="password"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.password?.message}
                      </p>
                      <p className="text-xs italic text-red-500">
                        {typeof serverResponse === "string"
                          ? serverResponse
                          : ""}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="password2"
                      >
                        Repeat Password
                      </label>
                      <input
                        disabled={disabled}
                        {...register("password2", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="name"
                        type="password"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.password2?.message}
                      </p>
                    </div>
                    <div className="flex flex-row py-4">
                      <input
                        className="mr-2 leading-tight checked:bg-blue-950 rounded-xl"
                        disabled={disabled}
                        type="checkbox"
                        required
                      />
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor=""
                      >
                        Políticas de privacidad etc demás, bla bla
                      </label>
                    </div>
                    <div className="col-span-2 flex justify-center ">
                      <button className=" px-4 py-2 font-bold text-white bg-blue-950 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer ">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRemainingForm;
