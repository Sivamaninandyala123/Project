import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section for Logo and Links */}
        <div className="left-section">
          <div className="logo-section">
            
            <h2 className="logo-text">Finalle</h2>
          </div>
          <ul className="navbar-links">
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Developers API</Link>
            </li>
          </ul>
          <form className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="AI Search"
              aria-label="Search"
            />
            <button type="submit" className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* Right Section for Profile and Weekly Brief */}
        <div className="right-section">
          
          <Link className="nav-link btn-weekly-brief" to="/weekly-brief">Weekly Brief</Link>
          <button className="profile-icon">
            <Link className="nav-link btn-weekly-brief" to="/profile"><i className="fas fa-user"></i></Link>
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
