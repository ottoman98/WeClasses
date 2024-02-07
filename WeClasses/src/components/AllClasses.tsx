import { GetAllClasses } from "../api/axiosClasses";
import ClassElement from "./ClassElement";

function AllClasses() {
  const data = GetAllClasses();

  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <span className="mr-3 font-semibold text-dark">
                    All Classes
                  </span>
                  <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
                    classes you offer
                  </span>
                </h3>
                <div className="relative flex flex-wrap items-center my-2">
                  <a
                    href="javascript:void(0)"
                    className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                  >
                    url puede ser mas adelante darle un uso
                  </a>
                </div>
              </div>

              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-start min-w-[175px]">
                          LANGUAGE / TITLE
                        </th>
                        <th className="pb-3 text-end min-w-[100px]">NAME</th>

                        <th className="pb-3 pr-12 text-end min-w-[175px]">
                          DURATION
                        </th>
                        <th className="pb-3 pr-12 text-end min-w-[100px]">
                          DATE
                        </th>
                        <th className="pb-3 text-end min-w-[50px]">OPTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!data ? (
                        <>'loading'</>
                      ) : (
                        data.map((x) => {
                          return (
                            <>
                              <ClassElement classe={x} />
                            </>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllClasses;
