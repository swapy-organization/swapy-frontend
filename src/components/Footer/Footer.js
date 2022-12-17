import React from "react";

// reactstrap components
import './Footer.scss';
function Footer() {
  return (
    <footer class="section bg-footer">
    <div class="container">
      <div>
        <h6 class="footer-heading text-uppercase text-white">Informations</h6>
        <ul class="footer-link mt-4">
          <li><a href="#!">Sitemap</a></li>
          <li><a href="#!">Our team</a></li>
          <li><a href="#!">Terms of Services</a></li>
        </ul>
      </div>
      <div>
        <h6 class="footer-heading text-uppercase text-white">Help</h6>
        <ul class="footer-link mt-4">
          <li><a href="/signup">Register</a></li>
          <li><a href="/signin">Sign in</a></li>
          <li><a href="#!">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer-link">
        <h6 class="footer-heading text-uppercase text-white">Contact us</h6>
        <p class="contact-info mt-4">Need help ?</p>
        <p class="contact-info">+XX XX-XX-XX-XX-XX</p>
        <div>
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#!"><i class="fab facebook footer-social-icon fa-facebook-f">F</i></a></li>
            <li class="list-inline-item"><a href="#!"><i class="fab twitter footer-social-icon fa-twitter">TW</i></a></li>
            <li class="list-inline-item"><a href="#!"><i class="fab instagram footer-social-icon fa-instagram">IG</i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <p class="footer-alt">2022 © Swapy, All Rights Reserved</p>
    </div>
  </footer>
  );
}

export default Footer;