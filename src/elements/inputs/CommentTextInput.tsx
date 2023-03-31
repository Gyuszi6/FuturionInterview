import { CommentTextContainer, Label, CommentTextArea } from "./styles";

type commentTextType = {
  name: string;
  setFieldValue: (name: string, val: string) => void;
  value: string;
  label: string;
};

const CommentTextInput = ({
  name,
  setFieldValue,
  value,
  label,
}: commentTextType) => {
  return (
    <CommentTextContainer>
      <Label>{label}</Label>
      <CommentTextArea
        name={name}
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
      />
    </CommentTextContainer>
  );
};

export default CommentTextInput;
