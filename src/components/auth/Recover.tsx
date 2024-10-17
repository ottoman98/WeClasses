import { useForm } from "react-hook-form";
import { axiosRecoverPassword } from "../../api/axios";
import { useContext, useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";

import { DataContextLanguage } from "../../context/language";
import { Link } from "react-router-dom";
function Recover() {
  const [response, setResponse] = useState<{
    message: string;
    email: string;
    valid: boolean;
  }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const { translation } = useContext(DataContextLanguage);

  if (response?.valid) {
    return (
      <section className="h-[50rem] flex justify-center items-center bg-gray-100">
        <div className="w-2/5 flex flex-col gap-5 items-center">
          <span>
            <MdMarkEmailRead size={40} />
          </span>

          <h2 className="text-5xl text-center">
            We sent you an email with reset instructions
          </h2>
          <p className="text-2xl text-center">
            It may take up to 10 minutes to arrive. If you don't receive
            instructions shortly, please check your email's spam or junk folder.
            If this does not work, try re-sending your request.
          </p>
          <Link className="underline text-xl" to="/login">
            Go to login
          </Link>
        </div>
      </section>
    );
  } else {
    return (
      <section className="h-[50rem] flex justify-center items-center bg-gray-100">
        <div className=" flex justify-center flex-col w-1/3 gap-12">
          <h2 className=" text-6xl ">Forgot your password?</h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(async (x) => {
              const data = (await axiosRecoverPassword(x.email)).data;
              setResponse(data);
            })}
          >
            <p className="text-xs italic text-red-500">
              {!response?.valid ? response?.message : ""}
            </p>
            <div className="flex flex-col ">
              <label
                className="block text-sm font-medium leading-6 text-customBlack"
                htmlFor="name"
              >
                {translation.forms.recover.email}
              </label>
              <input
                {...register("email", {
                  required: { value: true, message: "Required" },
                })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="name"
                type="email"
                placeholder={translation.forms.recover.email}
              />
              <p className="text-xs italic text-red-500">
                {errors.email?.message}
              </p>
            </div>
            <input
              className="w-full px-4 py-2 font-bold text-white bg-blue-950 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer"
              type="submit"
              value={translation.forms.recover.button}
            />
          </form>
        </div>
      </section>
    );
  }
}

export default Recover;
