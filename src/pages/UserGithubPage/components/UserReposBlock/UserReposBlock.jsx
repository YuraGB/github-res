import RepoItem from "../RepoItem/RepoItem.jsx";
import classes from "./reposBlock.module.scss";
import PropTypes from "prop-types";
import ErrorComponent from "../../../../components/ErrorComponent/ErrorComponent.jsx";
import SpinnerComponent from "../../../../components/Spinner/Spinner.jsx";

/**
 * UserReposBlock
 * @param repos
 * @param {Error | undefined} error
 * @param {boolean} loading
 * @return {JSX.Element}
 * @constructor
 */
const UserReposBlock = ({ repos, error, loading }) => {
  if (loading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  if (!repos || repos.length === 0) {
    return <div className={classes.noData}>No repositories yet</div>;
  }

  return (
    <section className={classes.root}>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </section>
  );
};

export default UserReposBlock;

UserReposBlock.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      language: PropTypes.string,
      url: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
    }),
  ).isRequired,
  error: PropTypes.instanceOf(Error),
  loading: PropTypes.bool.isRequired,
};
