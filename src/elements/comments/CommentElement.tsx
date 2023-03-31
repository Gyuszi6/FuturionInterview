import {
  CommentCard,
  UserNameText,
  CommentText,
  UserNameContainer,
} from "./styles";

type commentType = {
  user: string;
  text: string;
  id: number;
};

const CommentElement = ({ user, text, id }: commentType) => {
  return (
    <CommentCard key={id}>
      <UserNameContainer>
        <UserNameText>{user}</UserNameText>
      </UserNameContainer>
      <CommentText>{text}</CommentText>
    </CommentCard>
  );
};

export default CommentElement;
