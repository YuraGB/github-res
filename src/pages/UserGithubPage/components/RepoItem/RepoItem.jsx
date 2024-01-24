import { Link } from "react-router-dom";
import classes from "./repoItem.module.scss";
import ChartBlock from "../ChartBlock/ChartBlock.jsx";

/**
 * @fileoverview RepoItem component
 * @param repo
 * @return {JSX.Element}
 * @constructor
 */
const RepoItem = ({ repo }) => {
  const { name, description, language, url, updatedAt, createdAt, fullName } =
    repo;

  return (
    <div className={classes.item}>
      <Link to={url} className={classes.item__link}>
        <h4 className={classes.item__name}>Repository name: {name}</h4>
        {description ? (
          <p className={classes.item__description}>{description}</p>
        ) : null}
        {language ? <p>Main language: {language}</p> : null}
        <div>
          <p>Created: {createdAt}</p>
          <p>Last time updated: {new Date(updatedAt).toLocaleDateString()}</p>
        </div>
        <ChartBlock repoName={name} />
      </Link>
    </div>
  );
};

export default RepoItem;
