import PropTypes from "prop-types";

/**
 * RepositoryComponent.jsx
 * @param repositoriesCount
 * @return {JSX.Element}
 * @constructor
 */
const RepositoryComponent = ({ repositoriesCount }) => {
  return <p> Public repositories: {repositoriesCount}</p>;
};

export default RepositoryComponent;

RepositoryComponent.propTypes = {
  repositoriesCount: PropTypes.number,
};
