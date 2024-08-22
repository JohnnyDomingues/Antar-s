import { useState, useEffect } from "react";
import "../styles/Profile.css";

function Profile() {
  const [userInfo, setUserInfo] = useState({
    pseudo: "",
    bio: "",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
    photo: "https://via.placeholder.com/150",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("/api/profile", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
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
    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        setMessage("Your profile has been saved successfully!");
      } else {
        setMessage("Failed to save profile. Please try again.");
      }
    } catch (err) {
      console.error("Error saving profile:", err);
      setMessage("An error occurred while saving your profile.");
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userInfo.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="bio">Biography</label>
            <textarea
              id="bio"
              name="bio"
              value={userInfo.bio}
              onChange={handleChange}
              rows="4"
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
        <button type="button" className="delete-button">
          Delete your account
        </button>
      </div>
      {message && (
        <div id="save-message" style={{ color: "green" }}>
          {message}
        </div>
      )}
    </main>
  );
}

export default Profile;
