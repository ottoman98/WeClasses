import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import logo from "../../imgs/weclasses-low-resolution-color-logo-removebg-preview.png";
import arrow from "../../imgs/down-chevron.png";
import { useContext } from "react";
import { DataContext } from "../../context/userAuth";

function NavBar() {
  const { isCookie, deleteCookie } = useContext(DataContext);

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
                {isCookie && <>isCookie</>}
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
          {isCookie ? (
            <>
              <ul>
                <Link to="/profile">
                  <li>Profile</li>
                </Link>

                <li
                  onClick={() => {
                    deleteCookie();
                  }}
                >
                  <a href="/">SignOut</a>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul>
                <Link to="login">
                  <li className="item">Login</li>
                </Link>
                <Link to="Register">
                  <li className="item">Sign Up</li>
                </Link>
              </ul>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
