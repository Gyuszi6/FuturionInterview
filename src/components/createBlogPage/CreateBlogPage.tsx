import {
  LeavePageButton,
  CreateBlogPageContainer,
  PageContainer,
} from "./styles";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CreateBlogForm from "./CreateBlogForm";

const CreateBlogPage = () => {
  const nav = useNavigate();
  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default CreateBlogPage;
