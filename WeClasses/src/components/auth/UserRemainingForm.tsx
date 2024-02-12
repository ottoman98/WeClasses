import { useParams } from "react-router-dom";
import { AxiosGetRemainingData, axiosPutRemainingData } from "../../api/axios";
import { useForm } from "react-hook-form";
import { fullContact } from "../../types/userTypes";
import { ReactNode, useEffect, useState } from "react";
import ModalWithButton from "./ModalWithButton";
import countries from "../../utils/CountryCodes.json";

function UserRemainingForm() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<fullContact>();
  const { id } = useParams();

  const [serverResponse, setServerResponse] = useState<{
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
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  let bool = false;

  if (serverResponse !== null && serverResponse.valid) {
    //navigate("/dashboard");
    bool = true;
  }

  const message: ReactNode = (
    <>
      <p>
        Gracias por culminar tu registro ya haces parte de la gran familia
        WECLASSES
      </p>
    </>
  );

  return (
    <>
      <ModalWithButton message={message} show={bool} />
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Formulario de usuario
            </h2>
            <p className="text-gray-500 mb-6">
              Completa tus datos y empieza a aprender hoy mismo!
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="text-sm ">
                <div className="text-gray-600 mb-6">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={handleSubmit(async (x) => {
                      const data = await axiosPutRemainingData(id, x);
                      setServerResponse(data.data);
                    })}
                    className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 "
                  >
                    <div className="flex flex-col ">
                      <label htmlFor="name">Name</label>
                      <input
                        {...register("name", {
                          required: { value: true, message: "Required" },
                        })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 "
                        id="name"
                        type="text"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.name?.message}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="name">Last Name</label>
                      <input
                        {...register("lastName", {
                          required: { value: true, message: "Required" },
                        })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        id="name"
                        type="text"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.lastName?.message}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="name">Email</label>

                      <input
                        disabled
                        {...register("email", {
                          required: { value: true, message: "Required" },
                        })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        id="name"
                        type="text"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.email?.message}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="name">Country</label>
                      <select
                        {...register("country", {
                          required: { value: true, message: "Required" },
                        })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        id="name"
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
                    <div className="flex flex-row">
                      <div className="flex flex-col w-1/3">
                        <label htmlFor="countryCode">Indicativo</label>

                        <select
                          className="h-10 border mt-1 rounded px-4  bg-gray-50 "
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
                      <div>
                        <label htmlFor="name">Phone</label>
                        <input
                          {...register("phone", {
                            required: { value: true, message: "Required" },
                          })}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          id="name"
                          type="text"
                        />
                        <p className="text-xs italic text-red-500">
                          {errors.phone?.message}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="name">Native Language</label>
                      <select
                        {...register("nativeLanguage", {
                          required: { value: true, message: "Required" },
                        })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
                      <label htmlFor="name">Language to learn</label>
                      <select
                        {...register("languageToLearn", {
                          required: { value: true, message: "Required" },
                        })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
                      <label htmlFor="name">Language Level</label>
                      <select
                        {...register("languageLevel", {
                          required: { value: true, message: "Required" },
                        })}
                        id="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
                      <label htmlFor="name">Password</label>
                      <input
                        {...register("password", {
                          required: { value: true, message: "Required" },
                        })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
                      <label htmlFor="name">Repeat Password</label>
                      <input
                        {...register("password2", {
                          required: { value: true, message: "Required" },
                        })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        id="name"
                        type="password"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.password2?.message}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <input type="checkbox" />
                      <label htmlFor="">
                        Políticas de privacidad etc demás, bla bla
                      </label>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Submit
                    </button>
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
