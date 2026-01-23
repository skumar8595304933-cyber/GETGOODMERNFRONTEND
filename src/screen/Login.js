import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "https://getgoodmernbackend.onrender.com";
      const response = await fetch(`${apiUrl}/api/loginuser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json()

      if (data.success) {
        localStorage.setItem("token", data.token)
        navigate("/")
      } else {
        alert("Invalid credentials")
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to connect to server. Please try again later.")
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue</p>

        <form onSubmit={handleSubmit}>
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
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary text-9xl  w-100 mt-2">
            Login
          </button>

          <Link to="/signup" className="btn btn-outline-danger w-100 mt-3">
            New User? Sign Up
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
