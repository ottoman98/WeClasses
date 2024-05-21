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
    <section>
      <div className="px-10 md:w-[28rem] mx-auto flex flex-col">
        <h3 className="pt-4 text-2xl text-center">
          {translation.forms.login.title}
        </h3>
        <div className="flex flex-row  justify-between py-5 text-xs md:text-base">
          <Link
            className="inline-block text-blue-500 align-baseline hover:text-blue-800 "
            to="/register"
          >
            {translation.forms.login.registerStudent}
          </Link>

          <Link
            className="inline-block text-blue-500 align-baseline hover:text-blue-800"
            to="/register"
          >
            {translation.forms.login.registerTeacher}
          </Link>
        </div>

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
        <p className="text-center"> {translation.forms.login.or}</p>

        <form
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
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              <p className="text-center">
                {" "}
                {translation.forms.login.form.email}
              </p>
            </label>
            <input
              className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
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
            <label htmlFor="password" className="text-sm">
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
              className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
              id="password"
              type="password"
              placeholder={translation.forms.login.form.password}
            />
            <p className="text-xs italic text-red-500">
              {errors.password?.message}
            </p>
          </div>
          <Link
            className="inline-block text-sm text-blue-950 align-baseline hover:text-light-blue mb-2 underline"
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

            <label className="text-sm ">
              {" "}
              {translation.forms.login.form.remember}
            </label>
          </div>

          <div className="mb-6 text-center">
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-950 rounded-full focus:border-red-600 ">
              {translation.forms.login.button}
            </button>
          </div>
          <hr className="mb-6 border-t" />
        </form>
      </div>
    </section>
  );
}

export default Login;
