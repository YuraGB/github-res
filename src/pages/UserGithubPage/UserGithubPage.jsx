import { useUserGithub } from "./useUserGithub.js";
import GlobalInfoBlock from "./components/GlobalInfoBlock/GlobalInfoBlock.jsx";
import UserReposBlock from "./components/UserReposBlock/UserReposBlock.jsx";
import classes from "./usersGithubPage.module.scss";
import ErrorFetch from "./components/ErrorFetch/ErrorFetch.jsx";

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
    <div>
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
    </div>
  );
};

export default UserGithubPage;
