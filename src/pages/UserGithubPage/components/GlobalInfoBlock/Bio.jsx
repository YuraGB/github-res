import PropTypes from "prop-types";

/**
 * Users  bio component
 * @param {string} [bioData]
 * @return {JSX.Element}
 * @constructor
 */
const Bio = ({ bioData }) => {
  if (bioData === undefined) {
    return null;
  }
  return <p>Bio: {bioData}</p>;
};

export default Bio;

Bio.propTypes = {
  bioData: PropTypes.string,
};
