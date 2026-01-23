import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  const isLoggedIn = localStorage.getItem('token')

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand m-3" to="/">GoFood</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        {/* Left side */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>

          {isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link active fs-6" to="/myorders">
                My Orders
              </Link>
            </li>
          )}
        </ul>

        {/* Right side */}
        <ul className="navbar-nav ms-auto">
          {!isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link className="btn btn-light text-success mx-1" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-light text-success mx-1" to="/signup">
                  Signup
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <button className="btn btn-light text-success mx-1">
                  My Cart
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-light text-danger mx-1"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>

      </div>
    </nav>
  )
}

export default NavBar
