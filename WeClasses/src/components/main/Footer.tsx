import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import logo from "../../assets/logos/Recurso 9@3x blanco.png";
import { useContext } from "react";
import { DataContextLanguage } from "../../context/language";

function Footer2() {
  const { translation } = useContext(DataContextLanguage);
  return (
    <footer className="bg-blue-950 text-white max-w-[150rem] mx-auto ">
      <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8">
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
                <BsInstagram />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.facebook.com/profile.php?id=61555765895554"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.youtube.com/@Davidsclasses"
                target="_blank"
                rel="noreferrer"
              >
                <BsYoutube />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.tiktok.com/@davidsc8?_t=8iIU3CRPaMU&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <BsTiktok />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.linkedin.com/company/we-classes/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-14 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">{translation.footer.contact.title}</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-slate-100">
                <span> davidsclasses1@gmail.com</span>
                <span> +1 (470) 812-0999 </span>
              </nav>
            </div>
            <div>
              <p className="font-medium">{translation.footer.about.title}</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm  text-slate-100">
                <a className="hover:opacity-75">WeClasses </a>
                {translation.footer.contact.content.map((x) => {
                  return <span>{x}</span>;
                })}
              </nav>
            </div>

            <div>
              <p className="font-medium">{translation.footer.follow.title}</p>
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
