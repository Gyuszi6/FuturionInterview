import {
  BlogFormInputContainer,
  BlogTitleLabel,
  BlogTitleInputBox,
} from "./styles";

type titleInputType = {
  name: string;
  setFieldValue: (name: string, val: string) => void;
  value: string;
  label: string;
};

const TitleInput = ({ name, setFieldValue, value, label }: titleInputType) => {
  return (
    <BlogFormInputContainer>
      <BlogTitleLabel>{label}</BlogTitleLabel>
      <BlogTitleInputBox
        name={name}
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
      />
    </BlogFormInputContainer>
  );
};

export default TitleInput;
