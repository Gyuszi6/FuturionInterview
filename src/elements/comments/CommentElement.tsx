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
    <CommentCard data-testid="commentCardTestId" key={id}>
      <UserNameContainer>
        <UserNameText data-testid="userNameTestId">{user}</UserNameText>
      </UserNameContainer>
      <CommentText data-testid="commentTextTestId">{text}</CommentText>
    </CommentCard>
  );
};

export default CommentElement;
