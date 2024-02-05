import { Octokit } from "@octokit/rest";

/**
 * UserData
 */
class UserData {
  /**
   * Singleton instance
   * @type {{paginate: import("@octokit/plugin-paginate-rest").PaginateInterface} & RestEndpointMethods & Api & Octokit}
   */
  #octokitInstance = new Octokit();

  /**
   * Singleton instance
   */
  constructor() {
    if (UserData._instance) {
      throw new Error(
        "Singleton classes can't be instantiated more than once.",
      );
    }
    UserData._instance = this;
  }

  /**
   * getRepoLanguages
   * @param {string} userName
   * @param {string || boolean} repo
   * @return {Promise<any>}
   */
  getRepoLanguages = async (userName, repo) => {
    const result = await this.#octokitInstance.request(
      `GET /repos/${userName}/${repo}/languages`,
    );

    return result.data;
  };

  /**
   * getUserRepos
   * @param {string} userName
   * @return {Promise<any>}
   */
  getUserRepos = async (userName) => {
    const result = await this.#octokitInstance.request(
      `GET /users/${userName}/repos`,
    );
    return result.data;
  };

  /**
   * getUserData
   * @param {string} userName
   * @return {Promise<any>}
   */
  getUserData = async (userName) => {
    const result = await this.#octokitInstance.request(
      `GET /users/${userName}`,
    );
    return result.data;
  };
}

export default new UserData();
