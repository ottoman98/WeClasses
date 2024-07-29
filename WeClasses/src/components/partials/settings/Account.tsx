import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  GetProfileStudent,
  GetProfileTeacher,
} from "../../../api/axiosProfiles";
import { decodeToken } from "react-jwt";
import { DataContextSession } from "../../../context/session";
import countries from "../../../utils/CountryCodes.json";
import {
  accountSettingsStudent,
  accountSettingsTutor,
} from "../../../api/axios";
import { fullContact } from "../../../types/userTypes";
import { tutorInfo } from "../../../types/teacher";
import { DataContextTabs } from "../../../context/studentsTab";
import { DataContextTabsSettings } from "../../../context/settings/settings";

function Account() {
  const { cookie } = useContext(DataContextSession);
  const tab = useContext(DataContextTabsSettings).setName;
  const { setName } = useContext(DataContextTabs);
  const decoded: { id: string; level: string } | null = decodeToken(
    cookie as string
  );

  let data;
  if (decoded?.level == "student") {
    data = GetProfileStudent(decoded?.id);
  } else {
    data = GetProfileTeacher(decoded?.id);
  }

  const {
    register,

    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<fullContact | tutorInfo>();

  const [serverResponse, setServerResponse] = useState<
    | {
        valid: string;
      }
    | undefined
  >(undefined);
  if (serverResponse?.valid) {
    setName("loading");
    tab("");
    setTimeout(() => {
      tab("account");

      setName("settings");
    }, 1000);
  }

  useEffect(() => {
    if (data) {
      setValue("countryCode", `+${data.countryCode}`);
      setValue("phone", data.phone);
      setValue("country", data.country);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  console.log(data);

  return (
    <div>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(async (x) => {
          let res;
          if (decoded?.level == "student") {
            res = await accountSettingsStudent(decoded?.id, x as fullContact);
          } else {
            res = await accountSettingsTutor(decoded?.id, x as tutorInfo);
          }
          setServerResponse(res?.data);
        })}
        className="w-60 md:w-full"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Foto de perfil</label>

          <img className="aspect-square  w-32" src={data?.photo} alt="" />
          <input
            {...register("photo", {})}
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
            id="name"
            type="file"
            accept="image/*"
          />

          <p className="text-xs italic text-red-500">{errors.photo?.message}</p>
          <p className="text-xs italic text-red-500"></p>
        </div>
        <div className="col-span-2 flex flex-row ">
          <div className="flex flex-col w-1/3 md:w-1/4 text-xs md:text-base">
            <label className="font-bold" htmlFor="countryCode">
              Indicativo <span className="text-red-600">*</span>
            </label>
            <select
              className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
              {...register("countryCode", {})}
            >
              <option value="">Country Code</option>
              {countries.map((x) => {
                return (
                  <option value={x.dial_code}>
                    {x.dial_code} {x.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col w-2/3 md:w-full">
            <label className="font-bold text-xs md:text-base" htmlFor="phone">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
              {...register("phone", {})}
              type="number"
              placeholder="phone"
            />

            <p className="text-xs italic text-red-500"></p>
          </div>
        </div>
        <div className="flex flex-col  text-xs md:text-base">
          <label className="font-bold" htmlFor="countryCode">
            Country <span className="text-red-600">*</span>
          </label>
          <select
            className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
            {...register("country", {})}
          >
            <option value="">Seleccione</option>
            {countries.map((x) => {
              return <option value={x.name}>{x.name}</option>;
            })}
          </select>
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
