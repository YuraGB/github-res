import { useNavigate } from "react-router-dom";
export const useInputSearch = () => {
  const navigate = useNavigate();

  /**
   * Redirect to user page
   * @param {{username: string}} value
   */
  const onFinish = (value) => {
    if (value?.username) {
      return navigate(`/${value.username}`);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return {
    onFinish,
    onFinishFailed,
  };
};
