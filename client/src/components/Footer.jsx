import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../assets/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-logo">
        <img src={logo} alt="logo" className="footer-logo-img" />
      </Link>
      <nav className="footer-nav">
        <a
          href="https://www.instagram.com"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link"
        >
          <FaSquareInstagram />
        </a>
        <a
          href="https://www.facebook.com"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.twitter.com"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link"
        >
          <FaTwitterSquare />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
