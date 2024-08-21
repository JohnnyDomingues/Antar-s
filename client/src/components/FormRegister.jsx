import { useState } from "react";
import { LuPenSquare } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import "../styles/FormSignUp.css";
import TheBear from "../assets/images/TheBear.mp4";

function FormRegister() {
  const [registerData, setRegisterData] = useState({
    pseudo: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

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
        navigate("/home");
      }, 2000); // Rediriger après 2 secondes
    } catch (err) {
      setError("Registration error.");
    }
  };

  return (
    <main className="form-signup-container">
      <div className="video-container">
        <video src={TheBear} autoPlay muted loop className="background-video" />
      </div>
      <div className="form-signup">
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
          <div className="register-button">
            <button className="button" type="submit" aria-label="button">
              <LuPenSquare />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default FormRegister;
