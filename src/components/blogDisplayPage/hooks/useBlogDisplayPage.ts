import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  SET_CURRENT_BLOG_ID,
  SET_CURRENT_BLOG_IMG,
  SET_CURRENT_BLOG_TEXT,
  SET_CURRENT_BLOG_TITLE,
} from "../../../store/states/blogSlice";

const useBlogDisplayPage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const backToMainPage = () => {
    nav("/home");
    dispatch(SET_CURRENT_BLOG_ID(0));
    dispatch(SET_CURRENT_BLOG_IMG(""));
    dispatch(SET_CURRENT_BLOG_TEXT(""));
    dispatch(SET_CURRENT_BLOG_TITLE(""));
    localStorage.removeItem("currentBlogImg");
    localStorage.removeItem("currentBlogTitle");
    localStorage.removeItem("currentBlogText");
    localStorage.removeItem("currentBlogId");
  };

  return { backToMainPage };
};

export default useBlogDisplayPage;
