import {
  LeavePageButton,
  ModifyBlogPageContainer,
  PageContainer,
} from "./styles";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ModifyBlogForm from "./ModifyBlogForm";

const ModifyBlogpage = () => {
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
      <ModifyBlogPageContainer>
        <ModifyBlogForm />
      </ModifyBlogPageContainer>
    </PageContainer>
  );
};

export default ModifyBlogpage;
