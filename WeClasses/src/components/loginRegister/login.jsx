import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "./loginRegister.css";
import requests from "../../api/requestsUser";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  navigate;

  const [data, setData] = useState();

  const onSubmit = handleSubmit(async (values) => {
    setData(await requests.loginRequestStudent(values));
  });

  useEffect(() => {
    if (data && data.message == "tas logeado rey") {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/profile");
    }
  }, [data]);

  return (
    <>
      <div className="main-form">
        <div className="form-info">
          <h2>LOGIN</h2>

          <i>Please enter your Email and password!</i>
          {data ? data.message : null}
        </div>
        {}
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
          Do not have account?<Link to="/register"> Sign Up</Link>
        </i>
      </div>
    </>
  );
}

export default Login;
