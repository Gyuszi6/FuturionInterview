import { LeavePageButton, ModifyBlogPageContainer } from "./styles";
import { useNavigate } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ModifyBlogForm from "./ModifyBlogForm";

const ModifyBlogpage = () => {
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
      <ModifyBlogPageContainer>
        <ModifyBlogForm />
      </ModifyBlogPageContainer>
    </>
  );
};

export default ModifyBlogpage;
