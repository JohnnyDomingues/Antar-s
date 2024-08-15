import PropTypes from "prop-types";

function VoirPlusModal({ poster, onCloseModal }) {
  return (
    <div>
      <h2>{poster.title}</h2>
      <p className="poster-description">{poster.description}</p>
      <img
        src={`${import.meta.env.VITE_API_URL}/${poster.image_url}`}
        alt={poster.image_alt || poster.title}
      />
      <button type="button" onClick={onCloseModal}>
        Fermer
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
