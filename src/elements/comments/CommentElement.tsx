import {
  CommentCard,
  UserNameText,
  CommentText,
  UserNameContainer,
} from "./styles";

type CommentType = {
  user: string;
  text: string;
  id: number;
};

const CommentElement = ({ user, text, id }: CommentType) => {
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
