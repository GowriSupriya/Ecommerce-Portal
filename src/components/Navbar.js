import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const storeName = localStorage.getItem("storeName");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>{storeName}</h2>
      
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navbar Links */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <NavLink to="/dashboard" activeclassname="active" onClick={() => setMenuOpen(false)}>Dashboard</NavLink>
        <NavLink to="/products" activeclassname="active" onClick={() => setMenuOpen(false)}>Products</NavLink>
        <NavLink to="/invoices" activeclassname="active" onClick={() => setMenuOpen(false)}>Invoices</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;

