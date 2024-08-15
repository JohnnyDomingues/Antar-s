import { useEffect, useState } from "react";
import Modal from "react-modal";
import connexion from "../services/connexion";
import VoirPlusModal from "../components/VoirPlusModal";
import Carousel from "../components/Carousel";

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
    <div>
      <h1 className="title">Poster</h1>
      <Carousel items={posters} onItemClick={openModal} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {selectedPoster && (
          <VoirPlusModal poster={selectedPoster} onCloseModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

export default Poster;
