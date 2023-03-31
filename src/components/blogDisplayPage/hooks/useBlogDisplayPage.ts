import { useNavigate } from "react-router";

const useBlogDisplayPage = () => {
  const nav = useNavigate();
  const backToMainPage = () => {
    nav("/home");
  };

  return { backToMainPage };
};

export default useBlogDisplayPage;
