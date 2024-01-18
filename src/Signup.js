import React, { useState } from "react";

const Signup = () => {
  const [name, setNmae] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <diV>
        <h2>Rgister</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="email"
              onChange={(e) => setNmae(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Name"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
      </diV>
    </div>
  );
};

export default Signup;
