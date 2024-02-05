import { contact } from "../types/userTypes";
import { useForm } from "react-hook-form";
import { ReactNode, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { axiosContact } from "../api/axios";
import ModalWithButton from "./ModalWithButton";
function Leaks() {
  const [serverResponse, setServerResponse] = useState<{
    message: string;
    valid: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contact>();

  let bool = false;

  if (serverResponse !== null && serverResponse.valid) {
    //navigate("/dashboard");
    bool = true;

    console.log(serverResponse.message);
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

      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div>
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                aa <br /> pa mañana es tarde
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(async (x) => {
                const data = await axiosContact(x);
                setServerResponse(data.data);
                console.log(serverResponse);
              })}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5"
            >
              <div>
                <input
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Required ",
                    },
                  })}
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name*"
                />
                <p className="text-xs italic text-red-500">
                  {errors.name?.message}
                </p>
              </div>
              <div>
                <input
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Required ",
                    },
                  })}
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name*"
                />

                <p className="text-xs italic text-red-500">
                  {errors.lastName?.message}
                </p>
              </div>
              <div>
                <input
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
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                />
                <p className="text-xs italic text-red-500">
                  {errors.email?.message}
                  {serverResponse?.message == "exist"
                    ? "This email alredy Exist"
                    : ""}
                </p>
              </div>
              <div>
                <select
                  {...register("nativeLanguage", {
                    required: { value: true, message: "Required" },
                  })}
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  id="name"
                >
                  <option value="">Seleccione su idioma nativo</option>
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

              <div className="flex gap-1">
                <select
                  {...register("countryCode", {
                    required: { value: true, message: "Required" },
                  })}
                  className="w-[46%]  bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  <option value="">indicativo</option>
                  <option value="1">+1 los yunaites</option>
                  <option value="57">+57 Colombia</option>
                </select>

                <p className="text-xs italic text-red-500">
                  {errors.countryCode?.message}
                </p>

                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Phone*"
                />

                <p className="text-xs italic text-red-500">
                  {errors.phone?.message}
                </p>
              </div>

              <div>
                <select
                  {...register("languageToLearn", {
                    required: { value: true, message: "Required" },
                  })}
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  id="name"
                >
                  <option value="">Seleccione lenguaje a aprender</option>
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
                <p className="text-xs italic text-red-500">
                  {errors.languageToLearn?.message}
                </p>
              </div>

              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Que esperas !!!!!
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
                vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaks;
