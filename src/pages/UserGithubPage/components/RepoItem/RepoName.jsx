import classes from "./repoItem.module.scss";
import PropTypes from "prop-types";

/**
 * RepoName
 * @param {string} name
 * @return {JSX.Element}
 * @constructor
 */
const RepoName = ({ name }) => {
  return <h4 className={classes.item__name}>Repository name: {name}</h4>;
};

export default RepoName;

RepoName.propTypes = {
  name: PropTypes.string.isRequired,
};
