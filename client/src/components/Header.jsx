import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import "../styles/Header.css";
import logo from "../assets/Logo.png";

function Header() {
  const { user, setUser } = useLogin();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <nav className="header-nav">
        <Link to="/posters" className="header-link">
          Posters
        </Link>
        <Link to="/profile" className="header-link">
          Profile
        </Link>
        {user && user.isAdmin && (
          <Link to="/admin" className="header-link">
            Admin
          </Link>
        )}
        {user ? (
          <button
            type="button"
            className="header-login-button"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        ) : (
          <>
            <div>
              <Link to="/login">
                <p className="header-login-button">Login</p>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <p className="header-signUp-button">Sign Up</p>
              </Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
