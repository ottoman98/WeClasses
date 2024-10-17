import { useContext } from "react";
import { DataContextTabs } from "../../context/studentsTab";
import { decodeToken } from "react-jwt";
import { DataContextSession } from "../../context/session";
import { DataContextLanguage } from "../../context/language";

function NavBarOptionsProfile() {
  const { name, setName } = useContext(DataContextTabs);
  const { cookie } = useContext(DataContextSession);
  const decoded: { id: string; level: string } | null = decodeToken(
    cookie as string
  );

  const { translation } = useContext(DataContextLanguage);
  return (
    <>
      <nav className="hidden md:block border px-4 bg-blue-900 text-white">
        <ul className="flex flex-row gap-6">
          <li
            className={`${
              name == "home" ? "border-b-4 border-light-blue" : ""
            } py-1 hover:cursor-pointer`}
            onClick={() => {
              setName("home");
            }}
          >
            {translation.profileNav.optionsNav.home}
          </li>

          {decoded?.level == "teacher" ? (
            <>
              <li
                className={`${
                  name == "classes" ? "border-b-4 border-light-blue" : ""
                } py-1 hover:cursor-pointer`}
                onClick={() => {
                  setName("classes");
                }}
              >
                {translation.profileNav.optionsNav.myClasses}
              </li>
              <li
                className={`${
                  name == "purchase" ? "border-b-4 border-light-blue" : ""
                } py-1 hover:cursor-pointer`}
                onClick={() => {
                  setName("purchase");
                }}
              >
                {translation.profileNav.optionsNav.purchase}
              </li>
            </>
          ) : (
            <li
              className={`${
                name == "lessons" ? "border-b-4 border-light-blue" : ""
              } py-1 hover:cursor-pointer`}
              onClick={() => {
                setName("lessons");
              }}
            >
              {translation.profileNav.optionsNav.myLessons}
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default NavBarOptionsProfile;
