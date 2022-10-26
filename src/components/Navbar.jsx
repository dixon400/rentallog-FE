import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink to="/" className="nav-link">
                Home
                <span className="sr-only">(current)</span>
            </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to="user" className="nav-link">
                    Users
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="item" className="nav-link">
                    Items
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="rentalLog" className="nav-link">
                    Rental Log
                </NavLink>
            </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar