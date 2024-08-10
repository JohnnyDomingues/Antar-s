import { useEffect, useState } from "react";
import Modal from "react-modal";
import connexion from "../services/connexion";
import VoirPlusModal from "../components/VoirPlusModal";

import "../styles/Poster.css";
import "../styles/VoirPlusModal.css";

Modal.setAppElement("#root");

function Poster() {
  const [posters, setPosters] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);

  useEffect(() => {
    connexion
      .get("api/posters")
      .then((response) => {
        setPosters(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posters!", error);
      });
  }, []);

  const openModal = (poster) => {
    setSelectedPoster(poster);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPoster(null);
    setModalIsOpen(false);
  };

  return (
    <div className="poster-container">
      {posters.map((poster) => (
        <div key={poster.id} className="poster-item">
          <div className="poster-image-container">
            <img
              src={`${import.meta.env.VITE_API_URL}/${poster.image_url}`}
              alt={poster.image_alt}
              className="poster-image"
            />
            <button
              type="button"
              className="view-more-button"
              onClick={() => openModal(poster)}
              aria-label={`Voir plus sur ${poster.title}`}
              tabIndex="0"
            >
              Voir Plus
            </button>
          </div>
        </div>
      ))}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {selectedPoster && (
          <VoirPlusModal poster={selectedPoster} onCloseModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

export default Poster;
