import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Explore.css";
import { PiArrowSquareDown } from "react-icons/pi";
import KingKong from "../assets/images/KingKong.jpg";
import ExMachina from "../assets/images/ExMachina.jpg";
import LeParrain from "../assets/images/LeParrain.jpg";

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

    handleScroll();

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
          <img src={LeParrain} alt="Affiche 2" className="poster" />
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
            The Washington Post
          </blockquote>
        </div>

        <div className="gallery-item left new-item" data-scroll>
          <img src={ExMachina} alt="Affiche 3" className="poster" />
          <p>
            "This new work showcases a different aspect of cinema, blending old
            and new techniques in a unique way."
            <br />
            CHRISTOPHER NOLAN
          </p>
        </div>

        <div className="quote-section right new-item" data-scroll>
          <blockquote>
            "A fresh perspective on cinematic art, pushing boundaries." <br />
            Film Critic
          </blockquote>
        </div>
        <p className="text-enter">
          <PiArrowSquareDown />
        </p>
        <Link to="/register">
          <button type="button" className="enter-button" onClick={handleEnter}>
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Explore;
