import { ApiInstance } from "../../../api/api";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/useRedux";
import { SET_COMMENTS } from "../../../store/states/commentSlice";
import { useCallback } from "react";

const useComment = () => {
  const { currentBlogId } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();
  const createComment = async (userName: string, comment: string) => {
    try {
      await ApiInstance.post(`/Comment/${currentBlogId}`, {
        userName: userName,
        text: comment,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = useCallback(
    async (id: number | null | string) => {
      try {
        const response = await ApiInstance.get(`/Comment/${id}`);
        const data = response.data.results;
        dispatch(SET_COMMENTS(data));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  return { createComment, getComments };
};

export default useComment;
