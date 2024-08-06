import { useState } from "react";
import {
  GetClasseStatus,
  GetPurchaseList,
} from "../../../../api/studentPurchases";
import { classe } from "../../../../types/classeTypes";
import { FaRegUserCircle } from "react-icons/fa";

import ClassOptions from "../../../partials/ClassOptions";
import { MdAlternateEmail } from "react-icons/md";
import user from "../../../../assets/icons/profile.png";

function ClassElement({ data: classe }: { data: classe }) {
  const classStatus = GetClasseStatus(classe._id);
  const [hidden, setHidden] = useState(false);

  const users = GetPurchaseList(classe._id);
  console.log("data:", users);

  if (classe.createdAt) {
    return (
      <>
        <tr
          className={` border-gray-200 dark:border-gray-700 hover:bg-gray-100 cursor-pointer ${
            !hidden ? "border-b" : " bg-gray-100"
          }`}
          onClick={() => {
            setHidden(!hidden);
          }}
        >
          <td className="px-6 py-4">
            {new Date(classe.createdAt).toLocaleDateString() +
              " " +
              new Date(classe.createdAt).toLocaleTimeString()}
          </td>
          <td className="px-6 py-4">{classe.name}</td>
          <td className="px-6 py-4 text-center">
            {classe.language == "en" ? "English" : "Español"}
          </td>
          <td className="px-6 py-4">{classe.level}</td>
          <td className="px-6 py-4">
            {new Date(classe.date).toLocaleDateString() +
              " " +
              new Date(classe.date).toLocaleTimeString()}
          </td>
          <td className="px-6 py-4 text-center">{classe.duration} horas </td>
          <td className="px-6 py-4 text-center">
            {classStatus?.first ? 0 : classStatus?.data?.student.length}/
            {classe.capacity}
          </td>

          <td className=" px-6 py-4 text-green-600   text-center">
            {classe.price} $
          </td>

          <td className="px-6 py-4 text-center">
            <ClassOptions id={classe._id} />
          </td>
        </tr>
        {!hidden ? (
          ""
        ) : (
          <>
            <tr className="bg-gray-100 border-b ">
              <td colSpan={9} className="px-12">
                <div className="py-2">
                  <h3 className="font-bold text-light-blue ">Descripción</h3>
                  <span>{classe.description}</span>
                </div>
                <div className="flex flex-col gap-3 py-5">
                  <h3 className="font-bold text-light-blue">Estudiantes</h3>
                  <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-lg">
                    {!users
                      ? ""
                      : users.map((x) => {
                          return (
                            <div className="flex w-full ">
                              <img
                                className="aspect-square w-14 rounded-full"
                                src={x.photo}
                                alt=""
                              />

                              <div className="flex flex-col">
                                <div className="px-2">
                                  <span className="flex flex-row gap-1">
                                    <FaRegUserCircle
                                      className="mt-1"
                                      size={15}
                                    />
                                    {`${x.name} ${x.lastName}`}
                                  </span>
                                </div>

                                <td className="px-2 flex flex-row">
                                  <MdAlternateEmail />
                                  {x.email}
                                </td>
                              </div>
                            </div>
                          );
                        })}
                    {!users
                      ? ""
                      : Array.from({
                          length:
                            classe.capacity -
                            (classStatus?.data?.student.length || 0),
                        }).map(() => {
                          return (
                            <div className="flex w-full ">
                              <img
                                className="aspect-square w-14 rounded-full"
                                src={user}
                                alt=""
                              />

                              <div className="flex flex-col">
                                <div className="px-2">
                                  <span className="flex flex-row gap-1">
                                    <FaRegUserCircle
                                      className="mt-1"
                                      size={15}
                                    />
                                    Empty
                                  </span>
                                </div>

                                <td className="px-2 flex flex-row">
                                  <MdAlternateEmail />
                                  Empty
                                </td>
                              </div>
                            </div>
                          );
                        })}
                  </div>
                </div>
              </td>
            </tr>
          </>
        )}
      </>
    );
  }
}

export default ClassElement;
