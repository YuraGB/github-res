import PropTypes from "prop-types";

/**
 * LastTimeUpdated
 * @param updatedAt
 * @return {JSX.Element}
 * @constructor
 */
const LastTimeUpdated = ({ updatedAt }) => {
  return <p>Last time updated: {new Date(updatedAt).toLocaleDateString()}</p>;
};

export default LastTimeUpdated;

LastTimeUpdated.propTypes = {
  updatedAt: PropTypes.string.isRequired,
};
