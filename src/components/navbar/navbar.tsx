import "../navbar/navbar.css";
import flag1 from "../../imgs/Custom-Icon-Design-Flag-3-United-States-Flag.256.png";
import logo from "../../imgs/weclasses-low-resolution-color-logo-removebg-preview.png";
import arrow from "../../imgs/down-chevron.png";

import login from "../../imgs/login.png";

function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-section">
          <img id="logo" src={logo} alt="" />
        </div>
        <div className="nav-section">
          <ul>
            <li className="dropdown item">
              <li className="dropdown-button">
                Spanish Courses
                <img className="info-ico arrow" src={arrow} alt="" />
              </li>
              <ul className="dropdown-hide">
                <li>Beginners Learners A1-A2</li>
                <li>Intermediate Learners B1-B2</li>
              </ul>
            </li>
            <li className="item">Students</li>
            <li className="item">Teach with us</li>
          </ul>
        </div>
        <div className="nav-section">
          <ul>
            <li className="item">
              <img id="language" src={flag1} alt="" />
              Login <img className="info-ico" src={login} alt="" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
