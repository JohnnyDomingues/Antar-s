import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Explore.css";
// import PortraitDurieux2 from "../assets/images/PortraitDurieux2.jpg";
import KingKong from "../assets/images/KingKong.jpg";
import ExMachina from "../assets/images/ExMachina.jpg";

function Explore() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-scroll]");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // Trigger scroll handler on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleEnter = () => {
    navigate("/home");
  };

  return (
    <div className="enter-page">
      <div className="hero-section">
        {/* <img
          src={PortraitDurieux2}
          alt="Laurent Durieux"
          className="portrait"
        /> */}
        <h1>Explorez l'Art de Laurent Durieux</h1>
        <p className="intro-text">
          Laurent Durieux est un illustrateur et affichiste belge connu pour ses
          réinterprétations graphiques des classiques du cinéma. Chaque œuvre
          est une fusion unique de nostalgie et de modernité, capturant
          l'essence des films qu'il illustre.
        </p>
      </div>

      <div className="gallery-section">
        <div className="gallery-item left" data-scroll>
          <img src={KingKong} alt="Affiche 1" className="poster" />
          <p>
            "Laurent Durieux beautiful work takes poster art to a high level.
            The images, which are stunningly executed, express ideas and themes
            of the movies he has chosen in new terms..."
          </p>
        </div>

        <div className="quote-section right" data-scroll>
          <blockquote>
            "Laurent Durieux is out of this world." <br />
            The New-York Times
          </blockquote>
        </div>

        <div className="gallery-item right" data-scroll>
          <img src={ExMachina} alt="Affiche 2" className="poster" />
          <p>
            "[...] They communicate much without words, and stand alongside the
            wonderful tradition of illustrative art." <br />
            FRANCIS FORD COPPOLA
          </p>
        </div>

        <div className="quote-section left" data-scroll>
          <blockquote>
            "Laurent Durieux captures the essence of cinema like few others."
            <br />
            Quentin Tarantino
          </blockquote>
        </div>
        <button type="button" className="enter-button" onClick={handleEnter}>
          Explore
        </button>
      </div>
    </div>
  );
}

export default Explore;
