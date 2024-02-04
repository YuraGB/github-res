import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import getFormattedGlobalUserInfo from "./lib/formatGlobalUserInfo.js";
import { formattedReposInfo } from "./lib/formattedReposInfo.js";
import getData from "./api/getData.js";

/**
 * @fileoverview useUserGithub hook
 * @return {{globalUserInfo: unknown, globalDataLoading: boolean, globalDataError: Register extends {defaultError: infer TError} ? TError : Error, userName: string, reposError: Register extends {defaultError: infer TError} ? TError : Error, userReposInfo: (*|*[]), reposLoading: boolean}}
 */
export const useUserGithub = () => {
  const { username: userName } = useParams();
  const navigate = useNavigate();
  const { getUserData, getUserRepos } = getData;

  const {
    data: globalData,
    error: globalDataError,
    isLoading: globalDataLoading,
  } = useQuery({
    queryKey: ["userGlobal", userName],
    enabled: !!userName,
    queryFn: () => getUserData(userName),
  });

  const {
    data: reposData,
    error: reposError,
    isLoading: reposLoading,
  } = useQuery({
    queryKey: ["userRepos", userName],
    enabled: !!userName,
    queryFn: async () => await getUserRepos(userName),
  });

  if (!userName) {
    navigate("/");
  }

  const globalUserInfo = useMemo(() => {
    if (globalData) {
      return getFormattedGlobalUserInfo(globalData);
    }
  }, [globalData]);

  const userReposInfo = useMemo(() => {
    const data = formattedReposInfo(reposData);
    if (data.length > 10) {
      data.length = 10;
    }

    return data;
  }, [reposData]);

  return {
    globalUserInfo,
    userReposInfo,
    globalDataError,
    reposError,
    globalDataLoading,
    reposLoading,
    userName,
  };
};
