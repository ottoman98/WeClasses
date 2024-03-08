import { useParams } from "react-router-dom";
import { axiosSetPassword } from "../../api/axios";
import { useForm } from "react-hook-form";
import { fullContact } from "../../types/userTypes";
import { ReactNode, useState } from "react";
import ModalWithButton from "./ModalWithButton";

function SetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<fullContact>();
  const { id } = useParams();

  const [serverResponse, setServerResponse] = useState<{
    valid: string;
  } | null>(null);

  let bool = false;

  if (serverResponse !== null && serverResponse.valid) {
    //navigate("/dashboard");
    bool = true;
  }

  const message: ReactNode = (
    <>
      <p>Sus datos se setearon exitosamente</p>
    </>
  );

  return (
    <>
      <ModalWithButton message={message} show={bool} />
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Agrega tu info
            </h2>
            <p className="text-gray-500 mb-6">
              Completa tus datos y empieza a aprender hoy mismo!
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="text-sm ">
                <div className="text-gray-600 mb-6">
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={handleSubmit(async (x) => {
                      const data = await axiosSetPassword(id, x);
                      setServerResponse(data.data);
                    })}
                    className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 "
                  >
                    <div className="flex flex-col">
                      <label htmlFor="name">
                        Foto de usted onde se vea bien
                      </label>
                      <input
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        id="name"
                        type="file"
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
                      <label htmlFor="name">Link Video*</label>
                      <input
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        id="name"
                        type="url"
                      />
                      <span className="text-xs">
                        en este video persona responde, preguntas sencillas,
                        nombre,tiempo experiencia enseñando, de donde es, y
                        porque quiere unirse ,
                        <strong className="text-red-600">
                          en el idioma nativo y en el/los idiomas que quiere
                          enseñar.
                        </strong>
                      </span>
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
                      <label htmlFor="name">Password*</label>
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
                      <label htmlFor="name">Repeat Password*</label>
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

export default SetPassword;
