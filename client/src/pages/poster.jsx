import { useEffect, useState } from "react";
import connexion from "../services/connexion";
import "../styles/Poster.css";

function Poster() {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    connexion
      .get("api/posters")
      .then((response) => {
        setPosters(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <div className="poster-container">
      <h1>Posters</h1>
      <ul className="poster-list">
        {posters.map((poster) => (
          <li key={poster.id} className="poster-item">
            <h2>{poster.title}</h2>
            <p>{poster.description}</p>
            <img
              src={`${import.meta.env.VITE_API_URL}/${poster.image_url}`}
              alt={poster.image_alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Poster;
