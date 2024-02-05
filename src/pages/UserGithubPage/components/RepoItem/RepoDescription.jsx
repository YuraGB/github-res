import classes from "./repoItem.module.scss";
import PropTypes from "prop-types";

/**
 * RepoDescription
 * @param description
 * @return {JSX.Element|null}
 * @constructor
 */
const RepoDescription = ({ description }) => {
  return description ? (
    <p className={classes.item__description}>{description}</p>
  ) : null;
};

export default RepoDescription;

RepoDescription.propTypes = {
  description: PropTypes.string,
};
