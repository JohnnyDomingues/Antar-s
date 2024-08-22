import { useState, useEffect } from "react";
import connexion from "../services/connexion";
import { useLogin } from "../context/LoginContext";
import "../styles/Profile.css";

function Profile() {
  const { user, setUser } = useLogin();
  const [userInfo, setUserInfo] = useState({
    pseudo: user?.pseudo || "",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
    photo: "https://via.placeholder.com/150",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await connexion.get("/api/user"); // Assure-toi que le chemin est correct
        if (response.status === 200) {
          setUserInfo(response.data);
          setUser(response.data); // Met à jour le contexte avec les données utilisateur
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    };

    fetchUserInfo();
  }, [setUser]); // Ajoute setUser dans les dépendances

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (upload) => {
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          photo: upload.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (userInfo.newPassword !== userInfo.confirmNewPassword) {
      setMessage("New passwords do not match.");
      return;
    }

    try {
      const response = await connexion.put("/api/user", userInfo);

      if (response.status === 204) {
        setMessage("Your profile has been saved successfully!");
        setUser(userInfo); // Update the user context
      } else {
        setMessage("Failed to save profile. Please try again.");
      }
    } catch (err) {
      console.error("Error saving profile:", err);
      setMessage("An error occurred while saving your profile.");
    }
  };
  const handleDeleteAccount = async () => {
    try {
      const response = await connexion.delete("/api/user");

      if (response.status === 204) {
        setUser(null); // Réinitialise le contexte utilisateur
        setMessage("Your account has been deleted.");
      } else {
        setMessage("Failed to delete account. Please try again.");
      }
    } catch (err) {
      console.error("Error deleting account:", err);
      setMessage("An error occurred while deleting your account.");
    }
  };

  return (
    <main className="profile-page">
      <h1>Profile</h1>
      <div className="profile-container">
        <div className="profile-photo">
          <img src={userInfo.photo} alt="Profile" className="profile-image" />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="change-photo-input"
          />
          <button
            type="button"
            className="change-photo-button"
            onClick={() =>
              document.querySelector(".change-photo-input").click()
            }
          >
            Change your photo
          </button>
        </div>
        <div className="profile-info">
          <div className="form-input-group">
            <label htmlFor="pseudo">Username</label>
            <input
              type="text"
              id="pseudo"
              name="pseudo"
              value={userInfo.pseudo}
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="password">Current password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={userInfo.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="confirmNewPassword">Confirm new password</label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={userInfo.confirmNewPassword}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="profile-actions">
        <button type="button" className="save-button" onClick={handleSave}>
          Save
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={handleDeleteAccount}
        >
          Delete your account
        </button>
      </div>
      {message && (
        <div id="save-message" className="success-message">
          {message}
        </div>
      )}
    </main>
  );
}

export default Profile;
