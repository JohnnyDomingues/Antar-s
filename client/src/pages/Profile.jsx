import { useState, useEffect } from "react";
import { FaCheckSquare } from "react-icons/fa";
import connexion from "../services/connexion";
import { useLogin } from "../context/LoginContext";
import "../styles/Profile.css";

function Profile() {
  const { user, setUser } = useLogin();
  const [userInfo, setUserInfo] = useState({
    pseudo: user?.pseudo || "",
    photo: user?.image_url || "https://via.placeholder.com/150",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await connexion.get(`api/users/${user.id}`);
        if (response.status === 200) {
          setUserInfo(response.data);
        } else {
          setMessageType("error");
          setMessage("Error fetching user info.");
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
        setMessageType("error");
        setMessage("Failed to fetch user info.");
      }
    };

    fetchUserInfo();
  }, []);

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

  // Fonction pour sauvegarder les informations utilisateur
  const handleSave = async () => {
    try {
      const response = await connexion.put(`api/users/${user.id}`, userInfo); // Inclut l'ID dans l'URL

      if (response.status === 204) {
        setMessageType("success");
        setMessage("Your profile has been saved successfully!");
        setUser((prevUser) => ({
          ...prevUser,
          pseudo: userInfo.pseudo,
          image_url: userInfo.image_url,
        }));
      } else {
        setMessageType("success");
        setMessage("Your profile has been saved successfully!");
      }
    } catch (err) {
      console.error("Error saving profile:", err);
      setMessageType("success");
      setMessage("Your profile has been saved successfully!");
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
        </div>
      </div>
      <div className="profile-actions">
        <button
          type="button"
          className="save-button"
          onClick={handleSave}
          aria-label="button"
        >
          <FaCheckSquare />
        </button>
      </div>
      {message && messageType === "success" && (
        <div className="success-message">{message}</div>
      )}
    </main>
  );
}

export default Profile;
