import React from 'react';
import './header_css.css';
import logo from './image/logo.png';
import { faBars, faTimes, faUser, faCog, faCalendarCheck, faCloud, faStar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthModal from './AuthModal';
import WeatherSearch from './WeatherSearch'; // Adjust the import path as necessary

function Head({ isModalOpen, openLoginModal, openSignupModal, closeModal, user, onLogin, onSignOut, showWeatherSearch }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header>
        <div className="header-container">
          <img src={logo} alt="Logo" className="logo" />
          <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          <nav className={`nav-menu ${isMenuOpen ? 'visible' : ''}`}>
            <ul>
              <li><a href="#!" onClick={() => window.location.href = '/'}><i className="fas fa-home"></i> Home</a></li>
              <li><a href="#!" onClick={() => window.location.href = '/about'}><i className="fas fa-info-circle"></i> About</a></li>
              <li><a href="#!" onClick={() => window.location.href = '/offer'}><i className="fas fa-newspaper"></i> News</a></li>
              <li><a href="#!" onClick={() => window.location.href = '/packages'}><i className="fas fa-home"></i> Packages</a></li>
              <li><a href="#!" onClick={() => window.location.href = '/contact'}><i className="fas fa-envelope"></i> Contact</a></li>
              {user ? (
                <li className="dropdown">
                  <a href="#!" className="dropdown-toggle" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faUser} className="profile-icon" />
                    {user.username}
                  </a>
                  <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : 'hidden'}`}>
                    <li><a href="#!" onClick={() => window.location.href = '/manage-account'}><FontAwesomeIcon icon={faCog} /> Manage Account</a></li>
                    <li><a href="#!" onClick={() => window.location.href = '/booking-trip'}><FontAwesomeIcon icon={faCalendarCheck} /> Booking and Trip</a></li>
                    <li><a href="#!" onClick={showWeatherSearch}><FontAwesomeIcon icon={faCloud} /> Weather Review</a></li>
                    <li><a href="#!" onClick={() => window.location.href = '/saved'}><FontAwesomeIcon icon={faStar} /> Saved</a></li>
                    <li><a href="#!" onClick={onSignOut}><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</a></li>
                  </ul>
                </li>
              ) : (
                <li className="book-now">
                  <a href="#!" onClick={openLoginModal}><i className="fas fa-calendar-check"></i> Sign in</a>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <AuthModal isOpen={isModalOpen} onClose={closeModal} onLogin={onLogin} />
      </header>
    </>
  );
}

export default Head;
