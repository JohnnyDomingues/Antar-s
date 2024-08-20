import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuPenSquare } from "react-icons/lu";
import connexion from "../services/connexion";
import "../styles/FormSignUp.css";
import TheDarkKnight from "../assets/images/TheDarkKnight.jpg";

function FormRegister() {
  const [registerData, setRegisterData] = useState({
    pseudo: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Hook pour la redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevRegisterData) => ({
      ...prevRegisterData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (registerData.password !== registerData.password_confirmation) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    try {
      await connexion.post("api/register", registerData);
      setSuccess("Registration successful!");
      setTimeout(() => {
        navigate("/home"); // Redirection vers la page d'accueil après 2 secondes
      }, 2000);
      setRegisterData({
        pseudo: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    } catch (err) {
      setError("Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="register-page">
      <div className="movie-card">
        <img src={TheDarkKnight} alt="Movie Poster" />
      </div>
      <main className="form-signup">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="user-info">
            <div className="form-input-group">
              <input
                type="text"
                name="pseudo"
                id="pseudo"
                value={registerData.pseudo}
                onChange={handleChange}
                placeholder="Pseudo"
                aria-label="Pseudo"
                required
              />
            </div>
            <div className="form-input-group">
              <input
                type="email"
                name="email"
                id="email"
                value={registerData.email}
                onChange={handleChange}
                placeholder="Email"
                aria-label="Email"
                required
              />
            </div>
          </div>
          <div className="form-input-group">
            <input
              type="password"
              name="password"
              id="password"
              value={registerData.password}
              onChange={handleChange}
              placeholder="Password"
              aria-label="Password"
              required
            />
          </div>
          <div className="form-input-group">
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              value={registerData.password_confirmation}
              onChange={handleChange}
              placeholder="Password confirmation"
              aria-label="Password confirmation"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <div className="box-button">
            <button className="button" type="submit" aria-label="Register">
              <LuPenSquare />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default FormRegister;
