import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow stick-top">
        <div class="container">
          <Link className="navbar-brand" to="#">
            React Ecommerce
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  Collections
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
