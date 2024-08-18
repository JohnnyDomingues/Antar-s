import { useNavigate } from "react-router-dom";
import "../styles/Explore.css";

function Explore() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/");
  };

  return (
    <div className="enter-page">
      <div className="overlay">
        <div className="content">
          <h1>Bienvenue dans l'univers de Laurent Durieux</h1>
          <p>
            Laurent Durieux est un illustrateur et affichiste français, connu
            pour ses réinterprétations artistiques de classiques du cinéma.
            Découvrez une collection exclusive de ses œuvres, où chaque affiche
            est une invitation à voyager dans le temps et à redécouvrir vos
            films préférés sous un nouveau jour.
          </p>
          <button type="button" className="enter-button" onClick={handleEnter}>
            Explorez son univers
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;
