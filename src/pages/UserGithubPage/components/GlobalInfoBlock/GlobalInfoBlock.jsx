import classes from "./infoBlock.module.scss";
import PropTypes from "prop-types";
import ErrorComponent from "../../../../components/ErrorComponent/ErrorComponent.jsx";
import UserName from "./UserName.jsx";
import Bio from "./Bio.jsx";
import RepositoryComponent from "./RepositoryComponent.jsx";
import CreatedAtComponent from "../../../../components/CreatedAtComponent.jsx";
import SpinnerComponent from "../../../../components/Spinner/Spinner.jsx";
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
    return <SpinnerComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  if (!data) {
    return <div>No data yet</div>;
  }

  const { name, login, bio, publicRepos, createdAt } = data;

  return (
    <section className={classes.bio}>
      <UserName nicknameOrName={name ?? login} />
      <Bio bioData={bio} />
      <RepositoryComponent publicRepos={publicRepos} />
      <CreatedAtComponent createdAt={createdAt} />
    </section>
  );
};

export default GlobalInfoBlock;

GlobalInfoBlock.propTypes = {
  data: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
};
