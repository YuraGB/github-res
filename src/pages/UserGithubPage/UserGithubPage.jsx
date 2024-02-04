import { useUserGithub } from "./useUserGithub.js";
import GlobalInfoBlock from "./components/GlobalInfoBlock/GlobalInfoBlock.jsx";
import UserReposBlock from "./components/UserReposBlock/UserReposBlock.jsx";
import classes from "./usersGithubPage.module.scss";
import ErrorFetch from "./components/ErrorFetch/ErrorFetch.jsx";
import { Fragment } from "react";
import Head from "../../components/Head/Head.jsx";

/**
 * UserGithubPage
 * @return {JSX.Element}
 * @constructor
 */
const UserGithubPage = () => {
  const {
    userName,
    globalDataError,
    globalDataLoading,
    globalUserInfo,
    reposError,
    reposLoading,
    userReposInfo,
  } = useUserGithub();

  if (globalDataError || reposError) {
    return (
      <ErrorFetch
        globalDataError={globalDataError}
        reposError={reposError}
        userName={userName}
      />
    );
  }

  return (
    <Fragment>
      <Head
        description={"Github user information"}
        title={"Github User information"}
      />

      <article>
        <h3>Github resume of</h3>
        <h1 className={classes.title}>{userName}</h1>
        <GlobalInfoBlock
          data={globalUserInfo}
          error={globalDataError}
          loading={globalDataLoading}
        />
        <UserReposBlock
          repos={userReposInfo}
          error={reposError}
          loading={reposLoading}
        />
      </article>
    </Fragment>
  );
};

export default UserGithubPage;
