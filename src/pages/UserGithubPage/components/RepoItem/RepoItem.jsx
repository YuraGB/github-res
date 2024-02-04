import { Link } from "react-router-dom";
import classes from "./repoItem.module.scss";
import ChartBlock from "../ChartBlock/ChartBlock.jsx";
import PropTypes from "prop-types";
import CreatedAtComponent from "../../../../components/CreatedAtComponent.jsx";
import RepoName from "./RepoName.jsx";
import RepoDescription from "./RepoDescription.jsx";
import MainLanguage from "./MainLanguage.jsx";
import LasteTimeUpdated from "./LasteTimeUpdated.jsx";

/**
 * @fileoverview RepoItem component
 * @param repo
 * @return {JSX.Element}
 * @constructor
 */
const RepoItem = ({ repo }) => {
  const { name, description, language, url, updatedAt, createdAt } = repo;

  return (
    <div className={classes.item}>
      <Link to={url} className={classes.item__link} target={"_blank"}>
        <RepoName name={name} />
        <RepoDescription description={description} />
        <MainLanguage language={language} />
        <div>
          <CreatedAtComponent createdAt={createdAt} />
          <LasteTimeUpdated updatedAt={updatedAt} />
        </div>
        <ChartBlock repoName={name} />
      </Link>
    </div>
  );
};

export default RepoItem;

RepoItem.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    url: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
  }).isRequired,
};
