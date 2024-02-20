import { contact } from "../../types/userTypes";
import { useForm } from "react-hook-form";
import { ReactNode, useContext, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { axiosContact } from "../../api/axios";
import ModalWithButton from "./ModalWithButton";
import { DataContextLanguage } from "../../context/language";
import countries from "../../utils/CountryCodes.json";
function Leaks() {
  const { translation } = useContext(DataContextLanguage);
  const [serverResponse, setServerResponse] = useState<{
    message: string;
    valid: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contact>();
  console.log(countries[0]);
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
      <div>
        <h2 className="text-6xl text-center ">
          La plataforma de idiomas más efectiva del mundo
        </h2>
        <div className="flex gap-10 ">
          <div className="border-4 py-5 px-3">
            <h3 className="text-xl font-bold">Mejora tus habilidades</h3>
            <p className="font-bold">Lorem ipsum dolor sit,?aaaaaaaaaaaaaaa</p>
            <ul>
              <li>Lorem ipsum dolor sit,?</li>
              <li>Lorem ipsum dolor sit,?</li>
              <li>Lorem ipsum dolor sit,?</li>
              <li>Lorem ipsum dolor sit,?</li>
              <li>Lorem ipsum dolor sit,?</li>
            </ul>
          </div>
          <form
            onSubmit={handleSubmit(async (x) => {
              const data = await axiosContact(x);
              setServerResponse(data.data);
            })}
            className=" bg-light-blue py-10 px-5 flex flex-col gap-10"
          >
            <p className="font-bold text-base">
              Registrate para saber como podemos ayudarte
            </p>
            <div className="grid grid-cols-2">
              <div>
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
                  type="text"
                  placeholder={translation.register.form.lastName}
                />

                <p className="text-xs italic text-red-500">
                  {errors.lastName?.message}
                </p>
              </div>
              <div className="col-span-2  ">
                <input
                  className="w-full"
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

              <div className="col-span-2 flex flex-row">
                <select
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

                <input
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

              <div>
                <select
                  {...register("languageToLearn", {
                    required: { value: true, message: "Required" },
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
              <div>
                <select
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
                <button>{translation.register.form.submit}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Leaks;
