import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
    adress: "",
    state: "",
    city: "",
    country: "",
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
        "http://localhost:8080/api/v1/user/register",
        {
          firstname: input.firstname,
          lastname: input.lastname,
          email: input.email,
          number: input.number,
          password: input.password,
          confirmpassword: input.confirmpassword,
          adress: input.adress,
          city: input.city,
          state: input.state,
          country: input.country,
        }
      );

      if (data.success) {
        alert("User register successfully");
        navigate("/courses");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="register-page-body">
      <div>
        <h1 id="register-logo">REGISTER PAGE</h1>
      </div>

      <div id="register-form-wrapper">
        <form id="formreg" onSubmit={handlesubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder=" enter first name"
                value={input.firstname}
                onChange={handleChange}
                name="firstname"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="enter last name"
                value={input.lastname}
                onChange={handleChange}
                name="lastname"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="email"
                value={input.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div class="form-group col-md-6">
              <label>PH Number</label>
              <input
                type="number"
                class="form-control"
                placeholder="number"
                value={input.number}
                onChange={handleChange}
                name="number"
              />
            </div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter password"
              value={input.password}
              onChange={handleChange}
              name="password"
              className="form-controll"
            />
          </div>
          <div class="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="enter confirm Password"
              value={input.confirmpassword}
              onChange={handleChange}
              className="form-controll"
              name="confirmpassword"
            />
          </div>
          <div class="form-group">
            <label>Address</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter adress"
              value={input.adress}
              onChange={handleChange}
              name="adress"
            />
          </div>

          <div class="form-row">
            <div class="form-group col-md-4">
              <label>City</label>
              <select
                class="form-control"
                value={input.city}
                onChange={handleChange}
                name="city"
              >
                <option selected>Choose...</option>
                <option>Kolkata</option>
                <option>Pune</option>
                <option>Bangalore</option>
                <option>Hydrabad</option>
                <option>Delhi</option>
                <option>Chennai</option>
                <option>Jaipur</option>
                <option>Bhopal</option>
                <option>Surat</option>
                <option>Ahmedabad</option>
              </select>
            </div>

            <div class="form-group col-md-4">
              <label>State</label>
              <select
                class="form-control"
                value={input.state}
                onChange={handleChange}
                name="state"
              >
                <option selected>Choose...</option>
                <option>WestBengal</option>
                <option>Odisa</option>
                <option>Assam</option>
                <option>Goa</option>
                <option>Tamilnadu</option>
                <option>Kerala</option>
                <option>Up</option>
                <option>Mp</option>
                <option>Karnataka</option>
                <option>Punjub</option>
                <option>ArunachalPradesh</option>
              </select>
            </div>
          </div>
          <div class="form-group col-md-4">
            <label>Country</label>
            <select
              class="form-control"
              value={input.country}
              onChange={handleChange}
              name="country"
            >
              <option selected>Choose...</option>
              <option>India</option>
              <option>Japan</option>
              <option>Bangcock</option>
              <option>Australia</option>
              <option>New Zealnd</option>
              <option>Southafrica</option>
              <option>Bangladesh</option>
              <option>England</option>
              <option>Germany</option>
              <option>Srilanka</option>
              <option>France</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <button type="submit" class="btn btn-primary">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
