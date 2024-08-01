import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { decodeToken } from "react-jwt";
import { DataContextSession } from "../../../context/session";
import { passwordSettings } from "../../../api/axios";
import { DataContextTabs } from "../../../context/studentsTab";
import { DataContextTabsSettings } from "../../../context/settings/settings";
function Password() {
  const { cookie } = useContext(DataContextSession);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    password: string;
    password2: string;
    oldPassword: string;
  }>();
  const decoded: { id: string; level: string } | null = decodeToken(
    cookie as string
  );

  const tab = useContext(DataContextTabsSettings).setName;
  const { setName } = useContext(DataContextTabs);
  const [response, setResponse] = useState<
    | {
        valid: string;
        message: string;
      }
    | undefined
  >(undefined);

  if (response?.valid) {
    setName("loading");
    tab("");
    setTimeout(() => {
      tab("password");

      setName("settings");
    }, 1000);
  }
  return (
    <form
      action=""
      onSubmit={handleSubmit(async (x) => {
        if (decoded?.level == "student") {
          const data = await passwordSettings(decoded?.id, x);
          setResponse(data?.data);
        } else {
          const data = await passwordSettings(decoded?.id, x);
          setResponse(data?.data);
        }
      })}
    >
      <p className="text-xs italic text-red-500">{response?.message}</p>
      <div className="flex flex-col mb-1">
        <label htmlFor="password" className="text-sm">
          Old Password
        </label>
        <input
          {...register("oldPassword", {
            required: { value: true, message: "Ingrese su contraseña actual" },
            minLength: {
              value: 4,
              message: "debe ser superior a 8 la longitud sea serio",
            },
          })}
          className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
          id="password"
          type="password"
          placeholder="Old Password"
        />
        <p className="text-xs italic text-red-500">
          {errors.oldPassword?.message}
        </p>
      </div>
      <div className="flex flex-col mb-1">
        <label htmlFor="password" className="text-sm">
          New Password
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
          placeholder="Password"
        />
        <p className="text-xs italic text-red-500">
          {errors.password?.message}
        </p>
      </div>
      <div className="flex flex-col mb-1">
        <label htmlFor="password" className="text-sm">
          Repeat new Password
        </label>
        <input
          {...register("password2", {
            required: { value: true, message: "Ingrese un password" },
            minLength: {
              value: 4,
              message: "debe ser superior a 8 la longitud sea serio",
            },
          })}
          className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl"
          id="password"
          type="password"
          placeholder="Password"
        />
        <p className="text-xs italic text-red-500">
          {errors.password2?.message}
        </p>
      </div>
      <button
        className="bg-blue-900 px-3 py-1 rounded-xl text-white"
        type="submit"
      >
        submit
      </button>
    </form>
  );
}

export default Password;
