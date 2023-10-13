import "./loginRegister.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="main-form">
        <div className="form-info">
          <h2>Sign up</h2>
          <i>Please enter required data</i>
        </div>

        <form action="">
          <input id="name" type="text" placeholder="name" required />
          <input id="lastName" type="text" placeholder="LastName" required />
          <input id="email" type="email" placeholder="Email" required />
          <input id="country" type="text" placeholder="Country" required />
          <input id="phone" type="number" placeholder="Phone" required />
          <input
            id="languageToLearn"
            type="text"
            placeholder="Email"
            required
          />
          <input id="lanaguageLevel" type="text" placeholder="Text" required />
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
          <input
            id="password2"
            type="password"
            placeholder="Repeat Password"
            required
          />

          <input type="button" value="Sign Up" />
        </form>

        <i>
          you already registered?<Link to="/login"> Login</Link>
        </i>
      </div>
    </>
  );
}

export default Register;
