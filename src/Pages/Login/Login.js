import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",

    password: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        {
          email: input.email,

          password: input.password,
        }
      );
      if (data.success) {
        alert("User login successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="login">
      <div id="logtop">
        <h2 id="loginlogo">login</h2>
        <div id="loginright">
          Allready user ?<Link to="/register">SignUp here</Link>
        </div>
      </div>

      <div id="loginformwrapper">
        <form id="loginform" onSubmit={handlesubmit}>
          <div className="loginformfields">
            <div className="labeldiv">
              <label>Email :</label>
            </div>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="enter your name"
                name="email"
                value={input.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div id="password" className="loginformfields">
            <div className="labeldiv">
              <label>Password :</label>
            </div>
            <div className="inputdiv">
              <input
                type="password"
                placeholder="enter your password"
                name="password"
                value={input.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div id="submitdiv" className="loginformfields">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
