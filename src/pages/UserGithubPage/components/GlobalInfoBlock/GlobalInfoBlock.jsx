import classes from "./infoBlock.module.scss";
import PropTypes from "prop-types";
/**
 * GlobalInfoBlock
 * @param data
 * @param {Error | undefined} error
 * @param {boolean} loading
 * @return {JSX.Element}
 * @constructor
 */
const GlobalInfoBlock = ({ data, error, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div className={classes.noDataFound}>Something went wrong</div>;
  }

  if (!data) {
    return <div>No data yet</div>;
  }

  const { name, login, bio, publicRepos, createdAt } = data;

  return (
    <section className={classes.bio}>
      <p>User name or login: {name ? name : login}</p>
      {bio ? <p>Bio: {bio}</p> : null}
      <p> Public repositories: {publicRepos}</p>
      <p> Created at: {new Date(createdAt).toLocaleDateString()}</p>
    </section>
  );
};

export default GlobalInfoBlock;

GlobalInfoBlock.propTypes = {
  data: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
};
