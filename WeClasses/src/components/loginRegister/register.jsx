import "./loginRegister.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import requests from "../../api/requestsUser";

function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    await requests.registerRequestStudent(values);
  });
  return (
    <>
      <div className="main-form">
        <div className="form-info">
          <h2>Sign up</h2>
          <i>Please enter required data</i>
        </div>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: true })}
            required
          />
          <input
            type="text"
            placeholder="LastName"
            {...register("lastName", { required: true })}
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            type="text"
            placeholder="Country"
            {...register("country", { required: true })}
          />
          <input
            type="number"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <input
            type="password"
            placeholder="Repeat Password"
            {...register("password2", { required: true })}
          />
          <input
            type="text"
            placeholder="languageToLearn"
            {...register("languageToLearn", { required: true })}
          />
          <input
            type="text"
            placeholder="englishLevel"
            {...register("languageLevel", { required: true })}
          />

          <input type="submit" value="Sign Up" />
        </form>

        <i>
          you already registered?<Link to="/login"> Login</Link>
        </i>
      </div>
    </>
  );
}

export default Register;
