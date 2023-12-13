import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">John Basgallop</h1>

        <ul className="footer__list">

        <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

       
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/john-basgallop-12b8a6210/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/johnnybasgallop"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

      
        </div>
  
      </div>
    </footer>
  );
};

export default Footer;
