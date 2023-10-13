import { Link } from "react-router-dom";
import "./loginRegister.css";

function LoginRegister() {
  {
    return (
      <>
        <div className="main-form">
          <div className="form-toggle">
            <div>
              <p>Login</p>{" "}
            </div>
            <div>
              <p>Sign Up</p>
            </div>
          </div>
          <div className="form-info">
            <h2>LOGIN</h2>
            <i>Please enter your Email and password!</i>
          </div>

          <form action="">
            <input id="email" type="email" placeholder="Email" />

            <input id="email" type="password" placeholder="Password" />
            <Link to="">
              <i>Forgot password?</i>
            </Link>

            <input type="button" value="LOGIN" />
          </form>

          <i>
            Don't have account?<Link to=""> Sign Up</Link>
          </i>
        </div>
      </>
    );
  }
}

export default LoginRegister;
