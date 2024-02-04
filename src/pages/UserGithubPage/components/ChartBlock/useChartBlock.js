import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getData from "../../api/getData.js";
import { useMemo } from "react";
import { calculateCharts } from "../../lib/calculateCharts.js";

export const useUserGithub = (repoName) => {
  const { username: userName } = useParams();
  const { getRepoLanguages } = getData;

  const { isLoading, error, data } = useQuery({
    queryKey: ["charts", repoName],
    queryFn: async () => await getRepoLanguages(userName, repoName),
  });

  const languages = useMemo(() => {
    if (data) {
      return calculateCharts(data);
    }
  }, [data]);

  return {
    languages,
    error,
    isLoading,
  };
};
