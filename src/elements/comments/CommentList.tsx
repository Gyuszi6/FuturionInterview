import { useSelector } from "react-redux";
import CommentElement from "./CommentElement";
import CommentForm from "./CommentForm";

type commentType = {
  userName: string;
  text: string;
  id: number;
};

const CommentList = () => {
  const { comments } = useSelector((state: any) => state.comment);
  return (
    <div>
      <CommentForm />
      {comments.map((comment: commentType) => {
        return (
          <CommentElement
            user={comment.userName}
            text={comment.text}
            id={comment.id}
            key={comment.id}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
