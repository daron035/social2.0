import React, { useState } from "react";
import { Link } from "react-router-dom";
import TweetButton from "../../UI/button";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log({ e });
    login(email, password);
  };

  // Is the user authenticated?
  // Redirect the, to the home page

  return (
    <div className="flex h-screen">
      <div className="m-auto text-white mx-auto placeholder-opacity-100 w-1/3">
        <h1 className="text-center mb-4">Sign In</h1>
        {/* <p className="text-center">Sign into your Account</p> */}
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="grid grid-cols-1 gap-2">
            <label className="block">
              <span className="text-white">Email</span>
              <input
                type="email"
                className="mt-1 block w-full h-[34px] items-center px-3 text-black rounded-md"
                placeholder=""
                name="email"
                onChange={(e) => onChange(e)}
                required
              />
            </label>
            <label className="block">
              <span className="text-white">Password</span>
              <input
                type="password"
                className="mt-1 block w-full h-[34px] items-center px-3 text-black rounded-md"
                placeholder=""
                name="password"
                onChange={(e) => onChange(e)}
                minLength="6"
                required
              />
            </label>
            <div className="pt-4 flex justify-center">
              <div className="bg-[#4A99E9] rounded-full">
                <TweetButton type="submit">Login</TweetButton>
              </div>
            </div>
          </div>
        </form>
        <p className="mt-3">
          Don't have account? <Link to="/signup">Sign Up</Link>
        </p>
        <p className="mt-3">
          Forgot your Password? <Link to="/reset-password">Reset Password</Link>
        </p>
      </div>
    </div>
  );
};

export default connect(null, { login })(Login);
