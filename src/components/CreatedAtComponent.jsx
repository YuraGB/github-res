import PropTypes from "prop-types";

const CreatedAtComponent = ({ createdAt }) => {
  return <p> Created at: {new Date(createdAt).toLocaleDateString()}</p>;
};

export default CreatedAtComponent;

CreatedAtComponent.propTypes = {
  createdAt: PropTypes.string.isRequired,
};
