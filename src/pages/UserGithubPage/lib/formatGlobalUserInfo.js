/**
 * Format global user info from Github
 * @param {Object} globalUserInfo - global user info from Github
 * @param globalUserInfo
 * @return {{createdAt, name, bio, publicRepos, login, email}}
 */
const getFormattedGlobalUserInfo = (globalUserInfo) => {
  const {
    name,
    full_name: fullName,
    login,
    bio,
    email,
    public_repos: publicRepos,
    created_at: createdAt,
  } = globalUserInfo;

  return {
    name,
    login,
    bio,
    fullName,
    email,
    publicRepos,
    createdAt,
  };
};

export default getFormattedGlobalUserInfo;
