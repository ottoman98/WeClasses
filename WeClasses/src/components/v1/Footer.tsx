import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import logo from "../../assets/logo.jpeg";

function Footer2() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              src={logo}
              alt="WeClasses Logo"
              name="WeClasses"
            />
          </div>
          <div className="grid  grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">davidsclasses1@gmail.com</Footer.Link>
                <Footer.Link href="#">+1 (470) 812-0999</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">WeClasses</Footer.Link>
                <Footer.Link href="#">el que desarrollo esto</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">LinkedIn</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="WeClasses" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.instagram.com/davidsclasses/"
              icon={BsInstagram}
              target="_blank"
            />
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon
              href=" https://www.tiktok.com/@davidsc8?_t=8iIU3CRPaMU&_r=1
"
              icon={BsTiktok}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.youtube.com/@Davidsclasses"
              icon={BsYoutube}
              target="_blank"
            />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footer2;
