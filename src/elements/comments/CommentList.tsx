import { useAppSelector } from "../../store/hooks/useRedux";
import CommentElement from "./CommentElement";
import CommentForm from "./CommentForm";
import { CommentPageContainer, CommentElementContainer } from "./styles";

type CommentType = {
  userName: string;
  text: string;
  id: number;
};

const CommentList = () => {
  const { comments } = useAppSelector((state) => state.comment);
  return (
    <CommentPageContainer>
      <CommentForm />
      <CommentElementContainer>
        {comments.map((comment: CommentType) => {
          return (
            <CommentElement
              user={comment.userName}
              text={comment.text}
              id={comment.id}
              key={comment.id}
            />
          );
        })}
      </CommentElementContainer>
    </CommentPageContainer>
  );
};

export default CommentList;
