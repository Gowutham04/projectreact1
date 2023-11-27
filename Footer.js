import React from 'react';
import './App.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>Contact Us</h3>
          <p>Email: greenworld@gardening-at-home.com</p>
          <p>Phone: 8610807985</p>
        </div>
        <div className="footer__section">
          <h3>Follow Us</h3>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2023 HomeGardening Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;