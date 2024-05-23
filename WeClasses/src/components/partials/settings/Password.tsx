import { useForm } from "react-hook-form";

function Password() {
  const { register } = useForm();
  return (
    <form action="">
      <div className="flex flex-col mb-1">
        <label htmlFor="password" className="text-sm">
          Old Password
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
        <p className="text-xs italic text-red-500"></p>
      </div>{" "}
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
      </div>
      <div className="flex flex-col mb-1">
        <label htmlFor="password" className="text-sm">
          Repeat new Password
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
