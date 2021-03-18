import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button.jsx";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the my professional development life</p>
        <p className="footer-subscription-text">You can unsubscribe at any time.</p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
            <Button buttonStyle="btn--outline" onClick={() => alert("Hey!\nThank you for the subscribe!!!")}>
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>HTML, CSS</h2>
            <a
              href="https://html.spec.whatwg.org/multipage/"
              target="_blank"
              aria-label="Hypertext Markup Language"
              rel="noreferrer"
            >
              HTML
            </a>
            <a href="https://www.w3schools.com/" target="_blank" aria-label="W3 school" rel="noreferrer">
              W3School
            </a>
            <a href="https://developer.mozilla.org/en-US/" target="_blank" aria-label="MDN Web Docs" rel="noreferrer">
              MDN
            </a>
            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              target="_blank"
              aria-label="Cascading Style Sheets"
              rel="noreferrer"
            >
              CSS
            </a>
            <a href="https://css-tricks.com/" target="_blank" aria-label="CSS tricks" rel="noreferrer">
              CSS Tricks
            </a>
          </div>
          <div className="footer-link-items">
            <h2>JavaScript</h2>
            <a href="https://javascript.info/" target="_blank" aria-label="Javascript info" rel="noreferrer">
              Javascript
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" aria-label="Typed Javascript" rel="noreferrer">
              TypeScript
            </a>
            <a href="https://jquery.com/" target="_blank" aria-label="jQuery" rel="noreferrer">
              jQuery
            </a>
            <a href="https://nodejs.org/en/" target="_blank" aria-label="Node javascript" rel="noreferrer">
              NodeJS
            </a>
            <a href="https://expressjs.com/" target="_blank" aria-label="Express" rel="noreferrer">
              Express
            </a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>React</h2>
            <a href="https://reactjs.org/" target="_blank" aria-label="React javascript" rel="noreferrer">
              React
            </a>{" "}
            <a
              href="https://reactjs.org/docs/hooks-intro.html"
              target="_blank"
              aria-label="React Hooks"
              rel="noreferrer"
            >
              Hooks
            </a>
            <a href="https://redux.js.org/" target="_blank" aria-label="Redux javascript" rel="noreferrer">
              Redux
            </a>
            <a
              href="https://www.w3schools.com/react/"
              target="_blank"
              aria-label="React tutorial (W3 School)"
              rel="noreferrer"
            >
              React Tutorial
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Etc</h2>
            <a href="https://getbootstrap.com/" target="_blank" aria-label="Bootstrap" rel="noreferrer">
              Bootstrap
            </a>
            <a href="https://material.io/design" target="_blank" aria-label="Material Design" rel="noreferrer">
              Material Design
            </a>{" "}
            <a href="https://flutter.dev/" target="_blank" aria-label="Flutter" rel="noreferrer">
              Flutter
            </a>
            <a href="https://ionicframework.com/" target="_blank" aria-label="Ionic" rel="noreferrer">
              Ionic
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              NEO's <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">NEO's Portfolio &copy; 2021 with React</small>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              className="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              className="social-icon-link youtube"
              target="_blank"
              aria-label="YouTube"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://twitter.com"
              className="social-icon-link twitter"
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/neo-lee/"
              className="social-icon-link linkedin"
              target="_blank"
              aria-label="LinkedIn"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
