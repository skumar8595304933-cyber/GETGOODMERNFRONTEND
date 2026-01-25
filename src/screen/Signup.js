import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: ""
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "https://getgoodmernbackend-1.onrender.com";
      const response = await fetch(`${apiUrl}/api/createuser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        alert("Account created successfully 🎉");
        navigate("/login");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to connect to server. Please try again later.")
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="signup-title">Create Account 🚀</h2>
        <p className="signup-subtitle">Join us in just one step</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              name="name"
              value={credentials.name}
              onChange={onChange}
              type="text"
              className="form-control"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Email</label>
            <input
              name="email"
              value={credentials.email}
              onChange={onChange}
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Password</label>
            <input
              name="password"
              value={credentials.password}
              onChange={onChange}
              type="password"
              className="form-control"
              placeholder="Create password"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Address</label>
            <input
              name="location"
              value={credentials.location}
              onChange={onChange}
              type="text"
              className="form-control"
              placeholder="Enter address"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">
            Sign Up
          </button>

          <Link to="/login" className="btn btn-outline-danger w-100 mt-3">
            Already a user? Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
