import React from 'react'

function Footer() {
  return (
    <footer className="py-5 bg-dark text-light mt-5">
      <div className="container">
        <div className="row">

          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">Home</li>
              <li className="nav-item mb-2">Features</li>
              <li className="nav-item mb-2">Pricing</li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <h5>Subscribe</h5>
            <p>Monthly digest of whats new</p>
            <div className="d-flex gap-2">
              <input className="form-control" placeholder="Email" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>

        </div>

        <div className="border-top pt-3 mt-4 text-center">
          © 2026 GoFood. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
