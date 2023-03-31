import { useNavigate } from "react-router";
import { ApiInstance } from "../../../api/api";

const useCreateBlogs = () => {
  const nav = useNavigate();
  const createBlog = async (title: string, text: string) => {
    try {
      await ApiInstance.post("/BlogPost", {
        title: title,
        body: text,
      });
      nav("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return { createBlog };
};

export default useCreateBlogs;
