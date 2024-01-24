import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getUserData from "../../api/getUserData.js";
import { useMemo } from "react";
import { calculateCharts } from "../../lib/calculateCharts.js";

export const useUserGithub = (repoName) => {
  const { username: userName } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["charts", repoName],
    queryFn: async () => await getUserData(userName, repoName, true),
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
