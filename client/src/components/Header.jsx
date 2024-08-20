import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <nav className="header-nav">
        <Link to="/posters" className="header-link">
          Posters
        </Link>

        <div>
          <Link to="/login">
            <p className="header-login-button">Login</p>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <p className="header-signUp-button">Sign up</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
