import PropTypes from "prop-types";
import { BsTrash3 } from "react-icons/bs";

function ButtonDeleteAdmin({ handleClick, id }) {
  return (
    <button
      type="button"
      className="button"
      onClick={() => handleClick(id)}
      aria-label="button"
    >
      <BsTrash3 />
    </button>
  );
}

ButtonDeleteAdmin.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ButtonDeleteAdmin;
