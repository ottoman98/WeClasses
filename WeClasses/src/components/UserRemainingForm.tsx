import { useParams } from "react-router-dom";
import { AxiosGetRemainingData, axiosPutRemainingData } from "../api/axios";
import { useForm } from "react-hook-form";
import { fullContact } from "../types/userTypes";
import { useEffect, useState } from "react";

function UserRemainingForm() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<fullContact>();
  const { id } = useParams();

  const [serverResponse, setServerResponse] = useState();

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
    console.log(data);
  }, [data]);

  return (
    <>
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
                      console.log(serverResponse);
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
                        <option value="ar">Argentina</option>
                        <option value="us">United States</option>
                        <option value="bo">Bolivia</option>
                        <option value="br">Brasil</option>
                        <option value="cl">Chile</option>
                        <option value="co">Colombia</option>
                        <option value="cr">Costa Rica</option>
                        <option value="cu">Cuba</option>
                        <option value="do">República Dominicana</option>
                        <option value="ec">Ecuador</option>
                        <option value="sv">El Salvador</option>
                        <option value="gt">Guatemala</option>
                        <option value="hn">Honduras</option>
                        <option value="mx">México</option>
                        <option value="ni">Nicaragua</option>
                        <option value="pa">Panamá</option>
                        <option value="py">Paraguay</option>
                        <option value="pe">Perú</option>
                        <option value="pr">Puerto Rico</option>
                        <option value="us">Estados Unidos</option>
                        <option value="uy">Uruguay</option>
                        <option value="ve">Venezuela</option>
                        <option value="es">España</option>
                        <option value="fr">France</option>
                        <option value="de">Deutschland</option>
                        <option value="it">Italia</option>
                        <option value="gb">United Kingdom</option>
                        <option value="pt">Portugal</option>
                        <option value="nl">Nederland</option>
                        <option value="be">Belgique</option>
                      </select>
                      <p className="text-xs italic text-red-500">
                        {errors.country?.message}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="name">Phone</label>
                      <input
                        disabled
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
                        {errors.phone?.message}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="name">Languague to learn</label>
                      <select
                        {...register("languageToLearn", {
                          required: { value: true, message: "Required" },
                        })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        id="name"
                      >
                        <option value="es">Español</option>
                        <option value="es">Español</option>
                        <option value="en">English</option>
                      </select>
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
                        type="text"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.password?.message}
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
                        type="text"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.password2?.message}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <input type="checkbox" />
                      <label htmlFor="">
                        Politicas de privacidad etc demas, bla bla
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
