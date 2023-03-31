import { LeavePageButton, CreateBlogPageContainer } from "./styles";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BlogForm from "./BlogForm";

const CreateBlogPage = () => {
  const nav = useNavigate();
  return (
    <>
      <LeavePageButton
        onClick={() => {
          nav("/home");
        }}
      >
        <AiOutlineArrowLeft />
      </LeavePageButton>
      <CreateBlogPageContainer>
        <BlogForm />
      </CreateBlogPageContainer>
    </>
  );
};

export default CreateBlogPage;
