import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Loxury
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <form className="form-inline ml-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <Link className="ml-3" to="/login">
          <FaUser size={25} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
