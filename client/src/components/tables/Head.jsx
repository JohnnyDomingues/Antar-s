import PropTypes from "prop-types";

function Head({ data }) {
  return (
    <tr>
      {Object.keys(data).map((el) => (
        <th key={el}>{el}</th>
      ))}
    </tr>
  );
}

Head.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Head;
