import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import './Footer.scss';
function Footer() {
  return (
    <footer className=" bg-footer">
    <div className="container">
      <div>
        <h6 className="footer-heading text-uppercase text-white">Informations</h6>
        <ul className="footer-link mt-4">
          <li><a href="#!">Sitemap</a></li>
          <li><a href="#!">Our team</a></li>
          <li><a href="#!">Terms of Services</a></li>
        </ul>
      </div>
      <div>
        <h6 className="footer-heading text-uppercase text-white">Help</h6>
        <ul className="footer-link mt-4">
          <li><Link to="/signup">Register</Link></li>
          <li><Link to="/signin">Sign in</Link></li>
          <li><Link to="#!">Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="footer-link">
        <h6 className="footer-heading text-uppercase text-white">Contact us</h6>
        <p className="contact-info mt-4">Need help ?</p>
        <p className="contact-info">+XX XX-XX-XX-XX-XX</p>
        <div>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#!"><i className="fab facebook footer-social-icon fa-facebook-f">F</i></a></li>
            <li className="list-inline-item"><a href="#!"><i className="fab twitter footer-social-icon fa-twitter">TW</i></a></li>
            <li className="list-inline-item"><a href="#!"><i className="fab instagram footer-social-icon fa-instagram">IG</i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center mt-5">
      <p className="footer-alt">2022 © Swapy, All Rights Reserved</p>
    </div>
  </footer>
  );
}

export default Footer;