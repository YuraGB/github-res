import { memo } from "react";
import RepoItem from "../RepoItem/RepoItem.jsx";
import classes from "./reposBlock.module.scss";

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
    return <div className={classes.noData}>Loading...</div>;
  }

  if (error) {
    return <div className={classes.noData}>Something went wrong</div>;
  }

  if (!repos || repos.length === 0) {
    return <div className={classes.noData}>No repositories yet</div>;
  }

  return (
    <section className={classes.root}>
      {/* eslint-disable-next-line react/prop-types */}
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </section>
  );
};

export default memo(UserReposBlock);
