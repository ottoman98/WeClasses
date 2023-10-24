import "../navbar/navbar.css";
import { Link } from "react-router-dom";


import logo from "../../imgs/weclasses-low-resolution-color-logo-removebg-preview.png";
import arrow from "../../imgs/down-chevron.png";


function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-section">
          <Link to="/">
            <img id="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-section">
          <ul>
            <li className="dropdown item">
              <li className="dropdown-button">
                Stories
                <img className="info-ico arrow" src={arrow} alt="" />
              </li>
              <ul className="dropdown-hide">
                <Link to="stories">
                  <li>Beginners Learners A1-A2</li>
                </Link>

                <li>Intermediate Learners B1-B2</li>
              </ul>
            </li>
            <li className="item">Students</li>
            <li className="item">Teach with us</li>
          </ul>
        </div>
        <div className="nav-section">
          <ul>
            <Link to="login">
              <li className="item">Login</li>
            </Link>
            <Link to="Register">
              <li className="item">Sign Up</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
