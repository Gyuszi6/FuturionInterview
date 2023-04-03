import { ApiInstance } from "../../../api/api";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/useRedux";
import {
  SET_BLOGS,
  SET_CURRENT_BLOG_ID,
  SET_CURRENT_BLOG_IMG,
  SET_CURRENT_BLOG_TEXT,
  SET_CURRENT_BLOG_TITLE,
  SET_CURRENT_PAGE,
  SET_LOADING,
  SET_TOTAL_PAGE,
} from "../../../store/states/blogSlice";
import { useNavigate } from "react-router";
import axios from "axios";

const useBlogs = () => {
  const { currentPage } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const getBlogs = useCallback(async () => {
    try {
      dispatch(SET_LOADING(true));
      const response = await ApiInstance.get(
        `/BlogPost?page=${currentPage}&pageSize=12`
      );
      const data = response.data;
      dispatch(SET_TOTAL_PAGE(data.totalPage));
      dispatch(SET_CURRENT_PAGE(currentPage));
      dispatch(SET_BLOGS(data.results));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(SET_LOADING(false));
    }
  }, [dispatch, currentPage]);

  const getBlogsFromCurrentPage = useCallback(
    async (page: number) => {
      try {
        const response = await ApiInstance.get(
          `/BlogPost?page=${page}&pageSize=12`
        );
        const data = response.data;
        dispatch(SET_TOTAL_PAGE(data.totalPage));
        dispatch(SET_CURRENT_PAGE(page));
        dispatch(SET_BLOGS(data.results));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const getCurrentBlog = useCallback(
    async (id: number) => {
      try {
        const response = await ApiInstance.get(`/BlogPost/${id}`);
        const picture = await axios.get("https://picsum.photos/400");
        const data = response.data;
        const pictureId = picture.request.responseURL;
        dispatch(SET_CURRENT_BLOG_ID(data.id));
        dispatch(SET_CURRENT_BLOG_TITLE(data.title));
        dispatch(SET_CURRENT_BLOG_TEXT(data.body));
        dispatch(SET_CURRENT_BLOG_IMG(pictureId));
      } catch (error) {
        console.log(error);
      }
      nav("/blog");
    },
    [dispatch, nav]
  );

  const deleteBlog = async (id: number) => {
    try {
      await ApiInstance.delete(`/BlogPost/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return { getBlogs, getBlogsFromCurrentPage, getCurrentBlog, deleteBlog };
};

export default useBlogs;
