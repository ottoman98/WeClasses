import { useForm } from "react-hook-form";
import { axiosRecoverPassword } from "../../api/axios";
import { useState } from "react";
import ModalWithButton from "./ModalWithButton";
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
  console.log(response);
  let bool = false;

  if (response !== null && response?.valid) {
    bool = true;
  }

  return (
    <>
      <ModalWithButton
        show={bool}
        message={<p>{`We sent you an email to ${response?.email}`}</p>}
      />

      <p className="text-xs italic text-red-500">
        {!response?.valid ? response?.message : ""}
      </p>
      <form
        onSubmit={handleSubmit(async (x) => {
          const data = (await axiosRecoverPassword(x.email)).data;
          setResponse(data);
        })}
      >
        <div className="flex flex-col ">
          <label htmlFor="name">Name</label>
          <input
            {...register("email", {
              required: { value: true, message: "Required" },
            })}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 "
            id="name"
            type="text"
          />
          <p className="text-xs italic text-red-500">{errors.email?.message}</p>
        </div>
        <input type="submit" value="Recuperar contraseña" />
      </form>
    </>
  );
}

export default Recover;
