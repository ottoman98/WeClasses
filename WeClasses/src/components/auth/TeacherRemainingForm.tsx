import { useNavigate, useParams } from "react-router-dom";
import { tutorAdmission } from "../../api/axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { tutorInfo } from "../../types/teacher";
function TeacherRemainingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tutorInfo>();
  const { id } = useParams();

  const [serverResponse, setServerResponse] = useState<
    | {
        valid: string;
      }
    | undefined
  >(undefined);
  const navigate = useNavigate();
  if (serverResponse?.valid) {
    navigate("/admission");
  }

  return (
    <>
      <div className="min-h-screen p-6 bg-gradient-to-tr from-blue-900 to-light-blue flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-10">
            <h2 className="font-semibold text-6xl text-white text-center">
              Agrega tu info estas a un paso
            </h2>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="text-sm ">
                <div className="text-gray-600 mb-6">
                  <p>Please fill out all the fields.</p>
                </div>
                <div className="lg:col-span-2">
                  <form
                    encType="multipart/form-data"
                    onSubmit={handleSubmit(async (x) => {
                      const data = await tutorAdmission(id, x);

                      setServerResponse(data?.data);
                    })}
                    className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 "
                  >
                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="name"
                      >
                        Foto de usted onde se vea bien
                      </label>
                      <input
                        {...register("photo", {
                          required: { value: true, message: "Required" },
                          validate: (value) => {
                            if (value) {
                              const acceptedFormats = ["jpg", "jpeg", "png"];
                              let fileExtension: string | undefined;

                              if (value && value[0] instanceof File) {
                                fileExtension = value[0].name
                                  .split(".")
                                  .pop()
                                  ?.toLowerCase();
                              } else {
                                fileExtension = undefined;
                              }
                              if (fileExtension) {
                                if (!acceptedFormats.includes(fileExtension)) {
                                  return "Invalid file format. Only .png and jpeg files are allowed.";
                                }
                              }
                            }
                            return true;
                          },
                        })}
                        className="border-2 placeholder-slate-300 border-slate-200 hover:border-blue-900 focus:to-blue-950 rounded-xl text-xs md:text-base"
                        id="name"
                        type="file"
                        accept="image/png, image/jpeg"
                      />

                      <p className="text-xs italic text-red-500">
                        {errors.photo?.message}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="name"
                      >
                        Link Video*
                      </label>
                      <input
                        {...register("video", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="name"
                        type="url"
                      />
                      <span className="text-xs">
                        en este video persona responde, preguntas sencillas,
                        nombre,tiempo experiencia enseñando, de donde es, y
                        porque quiere unirse ,
                        <strong className="text-red-600">
                          en el idioma nativo y en el/los idiomas que quiere
                          enseñar.
                        </strong>
                      </span>
                      <p className="text-xs italic text-red-500">
                        {errors.video?.message}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="name"
                      >
                        Link de donaciones de paypal
                      </label>
                      <input
                        {...register("payment", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="name"
                        type="url"
                      />

                      <p className="text-xs italic text-red-500">
                        {errors.payment?.message}
                      </p>
                    </div>
                    <div></div>

                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="name"
                      >
                        Password*
                      </label>
                      <input
                        {...register("password", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="name"
                        type="password"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.password?.message}
                      </p>
                      <p className="text-xs italic text-red-500">
                        {typeof serverResponse === "string"
                          ? serverResponse
                          : ""}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="block text-sm font-medium leading-6 text-customBlack"
                        htmlFor="name"
                      >
                        Repeat Password*
                      </label>
                      <input
                        {...register("password2", {
                          required: { value: true, message: "Required" },
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="name"
                        type="password"
                      />
                      <p className="text-xs italic text-red-500">
                        {errors.password2?.message}
                      </p>
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <button className=" px-8 py-2 font-bold text-white bg-blue-950 rounded-full focus:border-red-600 hover:scale-105 cursor-pointer">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherRemainingForm;
