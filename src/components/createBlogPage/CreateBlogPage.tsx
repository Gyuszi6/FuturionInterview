import { LeavePageButton, CreateBlogPageContainer } from "./styles";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CreateBlogForm from "./CreateBlogForm";

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
        <CreateBlogForm />
      </CreateBlogPageContainer>
    </>
  );
};

export default CreateBlogPage;
