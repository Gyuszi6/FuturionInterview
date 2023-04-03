import { ApiInstance } from "../../../api/api";
import { useNavigate } from "react-router";

const useModifyBlogs = () => {
  const nav = useNavigate();
  const modifyBlogs = async (
    id: number | string | null,
    title: string | null,
    text: string | null
  ) => {
    try {
      await ApiInstance.put(`/BlogPost/${id}`, {
        title: title,
        body: text,
      });
      nav("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return { modifyBlogs };
};

export default useModifyBlogs;
