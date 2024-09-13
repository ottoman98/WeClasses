import { useParams } from "react-router-dom";
import { axiosChangePassword } from "../../api/axios";
import { useForm } from "react-hook-form";
import { fullContact } from "../../types/userTypes";
import { useState } from "react";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<fullContact>();
  const { id } = useParams();

  const [serverResponse, setServerResponse] = useState<{
    valid: string;
  } | null>(null);

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Cambiar Contraseña
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
                      const data = await axiosChangePassword(id, x);
                      setServerResponse(data.data);
                    })}
                    className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 "
                  >
                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="name"
                      >
                        Password*
                      </label>
                      <input
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

export default ChangePassword;
