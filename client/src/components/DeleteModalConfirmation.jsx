import PropTypes from "prop-types";

function DeleteModalConfirmation({ onDelete, onCancel }) {
  return (
    <div>
      <h2>Delete this user?</h2>
      <button type="button" onClick={onDelete}>
        Yep, delete
      </button>
      <button type="button" onClick={onCancel}>
        Nope
      </button>
    </div>
  );
}

DeleteModalConfirmation.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DeleteModalConfirmation;
