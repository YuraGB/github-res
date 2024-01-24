// todo split to 3 functions
import { Octokit } from "@octokit/rest";

const BASE_REQUEST = "GET /users/";
const getUserData = () => {
  const octokit = new Octokit();

  /**
   * Get user data from the Github
   * @param {string} userName
   * @param {string | boolean} [repo]
   * @param {string} [lang]
   */
  return async (userName, repo, lang) => {
    // if repos is true, get user repos, else get user data
    if (lang && repo) {
      const result = await octokit.request(
        `GET /repos/${userName}/${repo}/languages`,
      );

      return result.data;
    }

    if (repo) {
      try {
        const result = await octokit.request(
          `${BASE_REQUEST}${userName}/repos`,
        );
        return result.data;
      } catch (e) {
        throw new Error(e);
      }
    }
    try {
      const result = await octokit.request(`${BASE_REQUEST}${userName}`);
      return result.data;
    } catch (e) {
      throw new Error(e);
    }
  };
};

export default getUserData();
