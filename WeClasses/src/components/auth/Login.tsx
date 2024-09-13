import { useForm } from "react-hook-form";
import { login } from "../../types/userTypes";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosGoogleLogin, axiosLogin } from "../../api/axios";
import { useContext } from "react";
import { DataContextSession } from "../../context/session";
import { getCookies } from "../../utils/cookies";
import { GoogleLogin } from "@react-oauth/google";
import { DataContextTabs } from "../../context/studentsTab";
import { DataContextLanguage } from "../../context/language";

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
  const { setCookie } = useContext(DataContextSession);
  const { setName } = useContext(DataContextTabs);

  if (serverResponse !== null && serverResponse.message == "tas logeado rey") {
    navigate("/dashboard");
    setCookie(getCookies("token"));
    console.log("cookie");
    setName("home");
  }

  const { translation } = useContext(DataContextLanguage);

  return (
    <section
      className="flex flex-row md:pt-16 min-h-[60rem]  bg-center 
   
    bg-gray-100
    "
    >
      <div className="flex flex-col justify-center mx-auto object-contain bg-white/90">
        <h3 className="font-bold text-xl text-center text-customBlack">
          {translation.forms.login.title}
        </h3>

        <form
          className="py-8 px-10"
          onSubmit={handleSubmit(async (x) => {
            const data = await axiosLogin(x);
            setServerResponse(data.data);
          })}
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
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-customBlack"
            >
              <p>{translation.forms.login.form.email}</p>
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              id="email"
              type="email"
              placeholder={translation.forms.login.form.email}
            />
            <p className="text-xs italic text-red-500">
              {errors.email?.message}
            </p>
          </div>
          <div className="flex flex-col mb-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-customBlack"
            >
              {translation.forms.login.form.password}
            </label>
            <input
              {...register("password", {
                required: { value: true, message: "Ingrese un password" },
                minLength: {
                  value: 4,
                  message: "debe ser superior a 8 la longitud sea serio",
                },
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="password"
              type="password"
              placeholder={translation.forms.login.form.password}
            />
            <p className="text-xs italic text-red-500">
              {errors.password?.message}
            </p>
          </div>
          <Link
            className="inline-block text-xs align-baseline hover:text-light-blue mb-2 underline text-right w-full text-blue-900"
            to="/recover"
          >
            {translation.forms.login.form.forgot}
          </Link>
          <div className="mb-4">
            <input
              className="mr-2 leading-tight checked:bg-blue-950 rounded-xl"
              type="checkbox"
              id="checkbox_id"
              {...register("keepSession")}
            />

            <label className="text-xs text-blue-900">
              {translation.forms.login.form.remember}
            </label>
          </div>

          <div className="mb-6 text-center">
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-950 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer">
              {translation.forms.login.button}
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                await axiosGoogleLogin(credentialResponse);

                setCookie(getCookies("token"));
                navigate("/profile");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>

          <div className="flex flex-row py-5 text-xs md:text-base gap-1">
            <span className="text-xs">Need an account?</span>
            <Link
              className="inline-block text-blue-900 align-baseline hover:text-light-blue text-xs  "
              to="/register"
            >
              {translation.forms.login.registerStudent}
            </Link>
            <span className="text-xs">or</span>

            <Link
              className="inline-block text-blue-900 align-baseline hover:text-light-blue text-xs"
              to="/register"
            >
              {translation.forms.login.registerTeacher}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
