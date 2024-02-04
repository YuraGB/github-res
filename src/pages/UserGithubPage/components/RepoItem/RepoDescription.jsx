import classes from "./repoItem.module.scss";
import PropTypes from "prop-types";

const RepoDescription = ({ description }) => {
  return description ? (
    <p className={classes.item__description}>{description}</p>
  ) : null;
};

export default RepoDescription;

RepoDescription.propTypes = {
  description: PropTypes.string,
};
