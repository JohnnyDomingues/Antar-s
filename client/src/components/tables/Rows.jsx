import PropTypes from "prop-types";
import ButtonDeleteAdmin from "../ButtonDeleteAdmin";

function Rows({ data, handleDelete }) {
  return (
    <tr>
      {Object.keys(data).map((el) => (
        <td key={el}>{data[el]}</td>
      ))}
      <td>
        <ButtonDeleteAdmin
          label="button"
          handleClick={handleDelete}
          id={data.id}
        />
      </td>
    </tr>
  );
}

Rows.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Rows;
