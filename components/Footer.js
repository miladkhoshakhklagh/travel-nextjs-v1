import React from "react";

import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <strong>Travel</strong>
          <p>
            am nulla dolores dignissimos reiciendis nesciunt,
            ipsum, atque soluta aliquid est, vel similique maiores delectus
            excepturi provident!
          </p>
          <div className="social">
            <a href="#" aria-label="facebook" title="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="twitter" title="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="instagram" title="instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="whatsapp" title="whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="box">
          <strong>Links</strong>
          <ul>
            <li>
              <a href="#startseite">startseite</a>
            </li>
            <li>
              <a href="#trends">trends</a>
            </li>
            <li>
              <a href="#reiseziele">Reiseziele</a>
            </li>
            <li>
              <a href="#erfahrungsberichte">erfahrungsberichte</a>
            </li>
            <li>
              <a href="#">Book online</a>
            </li>
          </ul>
        </div>

        <div className="box">
          <strong>Extra Links</strong>
          <ul>
            <li>
              <a href="#reiseziele">Reiseziele finden</a>
            </li>
            <li>
              <a href="#explore">Umgebung erkunden</a>
            </li>
            <li>
              <a href="#subscribe">Abonnieren</a>
            </li>
            <li>
              <a href="#">Datenschutzrichtlinie</a>
            </li>
            <li>
              <a href="#">Nutzungsbedingungen</a>
            </li>
          </ul>
        </div>

        <div className="box">
          <strong className="">contact</strong>
          <span>
            <i className="fas fa-map-marker-alt"></i>Berlin
          </span>
          <span>
            <i className="fas fa-envelope"></i>Example@gmail.com
          </span>
          <span>
            <i className="fas fa-phone-square-alt"></i>+49 1234 343333
          </span>
        </div>
      </div>

      <span className="copyright">Milad 2024 - All Copyright Reserved.</span>
    </footer>
  );
};

export default Footer;
