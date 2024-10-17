import { Link, useParams } from "react-router-dom";
import { axiosChangePassword } from "../../api/axios";
import { useForm } from "react-hook-form";
import { fullContact } from "../../types/userTypes";
import { useState } from "react";
import { MdPassword } from "react-icons/md";

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
  if (!serverResponse?.valid) {
    return (
      <section className=" h-[50rem] flex justify-center  items-center bg-gray-100">
        <div className="w-1/3 flex flex-col gap-5">
          <h2 className="text-6xl font-semibold">Change your password</h2>
          <form
            onSubmit={handleSubmit(async (x) => {
              const data = await axiosChangePassword(id, x);
              setServerResponse(data.data);
            })}
            className="  flex flex-col justify-center gap-3 "
          >
            <div className="flex flex-col">
              <label
                className="block text-sm font-medium leading-6 text-customBlack"
                htmlFor="name"
              >
                Your new password <span className="text-red-500">*</span>
              </label>
              <input
                {...register("password", {
                  required: { value: true, message: "Required" },
                })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="name"
                type="password"
                placeholder="Enter your new password"
              />
              <p className="text-xs italic text-red-500">
                {errors.password?.message}
              </p>
              <p className="text-xs italic text-red-500">
                {typeof serverResponse === "string" ? serverResponse : ""}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                className="block text-sm font-medium leading-6 text-customBlack"
                htmlFor="name"
              >
                Confirm your password <span className="text-red-500">*</span>
              </label>
              <input
                {...register("password2", {
                  required: { value: true, message: "Required" },
                })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="name"
                type="password"
                placeholder="Repeat your password"
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
      </section>
    );
  } else {
    return (
      <section className="h-[50rem] flex justify-center items-center bg-gray-100">
        <div className="w-2/5 flex flex-col gap-5 items-center">
          <span>
            <MdPassword size={40} />
          </span>

          <h2 className="text-5xl text-center">Cambio de Contraseña exitoso</h2>
          <p className="text-2xl text-center">
            Contraseña cambiada exitosamente
          </p>
          <Link className="underline text-xl" to="/login">
            Go to login
          </Link>
        </div>
      </section>
    );
  }
}

export default ChangePassword;
