import { useForm } from "react-hook-form";
import { login } from "../types/userTypes";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosLogin } from "../api/axios";

function Login() {
  const [serverResponse, setServerResponse] = useState<{
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<login>();

  const navigate = useNavigate();

  if (serverResponse !== null && serverResponse.message == "tas logeado rey") {
    navigate("/dashboard");
    console.log(serverResponse.message);
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
              <img
                src="https://pm1.aminoapps.com/6853/02c8cec508506b1527b5f77b54fb9a1378b1f49fv2_00.jpg"
                alt=""
              />
            </div>

            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>

              <form
                onSubmit={handleSubmit(async (x) => {
                  const data = await axiosLogin(x);
                  setServerResponse(data.data);
                })}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                {!serverResponse ? (
                  ""
                ) : (
                  <>
                    <p className="text-xs italic text-red-500">
                      {serverResponse.message}
                    </p>
                  </>
                )}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-gray-700"
                  >
                    Email
                  </label>
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
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <p className="text-xs italic text-red-500">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: { value: true, message: "Ingrese un password" },
                      minLength: {
                        value: 4,
                        message: "debe ser superior a 8 la longitud sea serio",
                      },
                    })}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-xs italic text-red-500">
                    {errors.password?.message}
                  </p>
                </div>
                <div className="mb-4">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="checkbox_id"
                  />
                  <label className="text-sm">Remember Me</label>
                </div>
                <div className="mb-6 text-center">
                  <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                    Sign In
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/register"
                  >
                    Create an Account!
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/recover"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
