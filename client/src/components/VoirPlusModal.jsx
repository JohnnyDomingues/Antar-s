import PropTypes from "prop-types";
import { FaRegWindowClose } from "react-icons/fa";
import "../styles/VoirPlusModal.css";

function VoirPlusModal({ poster, onCloseModal }) {
  return (
    <div>
      <h2>{poster.title}</h2>
      <p>{poster.description}</p>
      <button type="button" onClick={onCloseModal} aria-label="close-button">
        <FaRegWindowClose />
      </button>
    </div>
  );
}

VoirPlusModal.propTypes = {
  poster: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    image_alt: PropTypes.string,
  }).isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default VoirPlusModal;
