import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { tutorInfo } from "../../../../types/teacher";
import { GetProfileTeacher } from "../../../../api/axiosProfiles";
import { decodeToken } from "react-jwt";
import { DataContextSession } from "../../../../context/session";
import { accountSettingsTutor } from "../../../../api/axios";

function Account() {
  const { cookie } = useContext(DataContextSession);

  const decoded: { id: string } | null = decodeToken(cookie as string);
  const data = GetProfileTeacher(decoded?.id);

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<tutorInfo>();

  const [serverResponse, setServerResponse] = useState<
    | {
        valid: string;
      }
    | undefined
  >(undefined);

  serverResponse;

  useEffect(() => {
    if (data) {
      setValue("description", data.description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      <form
        className="w-full"
        encType="multipart/form-data"
        onSubmit={handleSubmit(async (x) => {
          const data = await accountSettingsTutor(decoded?.id, x);
          setServerResponse(data?.data);
        })}
      >
        <div className="flex flex-col">
          <label htmlFor="name">Foto de perfil</label>

          <img className="aspect-square w-32" src={data?.photo} alt="" />
          <input
            {...register("photo")}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            id="name"
            type="file"
          />

          <p className="text-xs italic text-red-500">{errors.photo?.message}</p>
          <p className="text-xs italic text-red-500"></p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Description</label>

          <textarea
            {...register("description")}
            className="h-40 border mt-1 rounded px-4 w-full bg-gray-50 resize-none"
            id="name"
          />

          <p className="text-xs italic text-red-500">{errors.photo?.message}</p>
          <p className="text-xs italic text-red-500"></p>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Account;
