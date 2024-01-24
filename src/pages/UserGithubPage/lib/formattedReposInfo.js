/**
 *  Format the repos data to the required format
 * @param reposData
 * @return {*|*[]}
 */
export const formattedReposInfo = (reposData) => {
  if (!reposData || reposData.length === 0) {
    return [];
  }
  const reposInfo = reposData?.map((repo) => {
    const {
      name,
      description,
      full_name: fullName,
      language,
      clone_url: url,
      updated_at: updatedAt,
      created_at: createdAt,
    } = repo;

    return {
      id: repo.id,
      name,
      updatedAt,
      fullName,
      url,
      description,
      language,
      createdAt: new Date(createdAt).toLocaleDateString(),
    };
  });

  // thew most recent updated first
  return reposInfo.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
};
