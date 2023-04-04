import {
  BlogFormInputContainer,
  BlogTitleLabel,
  BlogTitleInputBox,
} from "./styles";

type TitleInputType = {
  name: string;
  setFieldValue: (name: string, val: string) => void;
  value: string;
  label: string;
};

const TitleInput = ({ name, setFieldValue, value, label }: TitleInputType) => {
  return (
    <BlogFormInputContainer>
      <BlogTitleLabel>{label}</BlogTitleLabel>
      <BlogTitleInputBox
        data-testid="BlogTitleInputTestId"
        name={name}
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
      />
    </BlogFormInputContainer>
  );
};

export default TitleInput;
