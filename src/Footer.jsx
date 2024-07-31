import React from 'react';
import "./footer_css.css";
import LogoTravelApp from "./image/logo.png";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="container">
        <div className="section footer-top">
          <div className="footer-brand" data-reveal="bottom">
            <a href="#" className="logo">
              <img src={LogoTravelApp}  loading="lazy" alt="Travel App Logo" />
            </a>
            <ul className="contact-list">
              <li className="contact-item">
                <div className="item-icon">
                  <ion-icon name="mail-open-outline"></ion-icon>
                </div>
                <div className="email_tele">
                  <p>Main Email: <a href="mailto:info@travelapp.com" className="contact-link">info@travelapp.com</a></p>
                  <p>Support: <a href="mailto:support@travelapp.com" className="contact-link">support@travelapp.com</a></p>
                </div>
              </li>
              <li className="contact-item">
                <div className="item-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <div className="email_tele">
                  <p>Customer Service: <a href="tel:+1234567890" className="contact-link">+1234567890</a></p>
                  <p>Emergency: <a href="tel:+0987654321" className="contact-link">+0987654321</a></p>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-list" data-reveal="bottom">
            <p className="headline-sm footer-list-title">About Us</p>
            <p className="text">We are dedicated to making your travel experiences unforgettable. Discover more about our services and destinations.</p>
            <address className="address">
              <ion-icon name="map-outline"></ion-icon>
              <span className="text">123 Travel Lane, Wanderlust City, TL 12345</span>
            </address>
          </div>
        
          <ul className="footer-list" data-reveal="bottom">
            <li><p className="headline-sm footer-list-title">Our Agency</p></li>
            <li><a href="#" className="text footer-link">Services</a></li>
            <li><a href="#" className="text footer-link">Insurance</a></li>
            <li><a href="#" className="text footer-link">Agency</a></li>
            <li><a href="#" className="text footer-link">Tourism</a></li>
            <li><a href="#" className="text footer-link">Payement</a></li>
          </ul>
          <ul className="footer-list" data-reveal="bottom">
            <li><p className="headline-sm footer-list-title">Parteners</p></li>
            <li><a href="#" className="text footer-link">Booking </a></li>
            <li><a href="#" className="text footer-link">RentelCar </a></li>
            <li><a href="#" className="text footer-link">HostelWord </a></li>
            <li><a href="#" className="text footer-link">Trivago </a></li>
            <li><a href="#" className="text footer-link">Trip Advisor </a></li>
          </ul>
          <div className="footer-list" data-reveal="bottom">
            <p className="headline-sm footer-list-title">Subscribe</p>
            <form action="" className="footer-form">
              <input type="email" name="email" placeholder="Enter your email" className="input-field" />
              <button type="submit" className="subscribe">Subscribe</button>
            </form>
            <p className="text">Stay updated with the latest travel deals and tips. You can unsubscribe anytime.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text copyright">&copy; 2024 Travel App | All Rights Reserved</p>
          <div className="social">
          <FaInstagram className="icon" />
          <FaFacebook className="icon" />
          <FaWhatsapp className="icon" />
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
