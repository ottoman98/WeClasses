import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./loginRegister.css";
import useAuth from "../../hooks/useContext";

function Login() {
  const { register, handleSubmit } = useForm();

  const { signUp } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });
  return (
    <>
      <div className="main-form">
        <div className="form-info">
          <h2>LOGIN</h2>
          <i>Please enter your Email and password!</i>
        </div>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("email", { required: true })}
            placeholder="Email"
          />

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />

          <Link to="">
            <i>Forgot password?</i>
          </Link>

          <input type="submit" value="LOGIN" />
        </form>

        <i>
          Don't have account?<Link to="/register"> Sign Up</Link>
        </i>
      </div>
    </>
  );
}

export default Login;
