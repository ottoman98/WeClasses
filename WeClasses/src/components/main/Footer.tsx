import logo from "../../assets/logos/Recurso 9@3x blanco.png";
import { useContext } from "react";
import { DataContextLanguage } from "../../context/language";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import youtube from "../../assets/icons/youtube.png";
import tiktok from "../../assets/icons/tiktok.png";
import linkedin from "../../assets/icons/linkedin.png";

function Footer2() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-light-blue text-white mx-auto  bottom-0 w-full">
      <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8 max-w-[80rem]">
        <div className="grid grid-cols-2 xs:grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src={logo} className="md:h-16 xs:h-9" alt="logo" />

            <h1 className="max-w-xs mt-4  text-white text-[2rem] opacity-0">
              We Classes
            </h1>
            <div className="flex mt-8 space-x-6 text-slate-100">
              <a
                className="hover:opacity-75"
                href="https://www.instagram.com/davidsclasses/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-8" src={instagram} alt="" />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.facebook.com/profile.php?id=61555765895554"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-8" src={facebook} alt="" />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.youtube.com/@Davidsclasses"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-8" src={youtube} alt="" />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.tiktok.com/@davidsc8?_t=8iIU3CRPaMU&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-8" src={tiktok} alt="" />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.linkedin.com/company/we-classes/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-8" src={linkedin} alt="" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-14 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">
                {translation.main.footer.contact.title}
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-slate-100">
                <span> davidsclasses1@gmail.com</span>
                <span> +1 (470) 812-0999 </span>
              </nav>
            </div>
            <div>
              <p className="font-medium">
                {translation.main.footer.about.title}
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm  text-slate-100">
                <a className="hover:opacity-75">WeClasses </a>
                {translation.main.footer.contact.content.map((x) => {
                  return <span>{x}</span>;
                })}
              </nav>
            </div>

            <div>
              <p className="font-medium">
                {translation.main.footer.follow.title}
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm  text-slate-100">
                <a
                  className="hover:opacity-75"
                  href=" https://www.instagram.com/davidsclasses/"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  className="hover:opacity-75"
                  href="https://www.facebook.com/profile.php?id=61555765895554"
                  target="_blank"
                >
                  Facebook
                </a>
                <a
                  className="hover:opacity-75"
                  href="https://www.tiktok.com/@davidsc8?_t=8iIU3CRPaMU&_r=1"
                  target="_blank"
                >
                  TikTok
                </a>
                <a
                  className="hover:opacity-75"
                  href="https://www.youtube.com/@Davidsclasses"
                  target="_blank"
                >
                  Youtube
                </a>
                <a
                  className="hover:opacity-75"
                  href="https://www.linkedin.com/company/we-classes/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2024 WeClasses</p>
      </div>
    </footer>
  );
}

export default Footer2;
