import { BlogFormContentContainer, Label, BlogTextArea } from "./styles";

type blogTextInputType = {
  name: string;
  setFieldValue: (name: string, val: string) => void;
  value: string;
  label: string;
};

const BlogTextInput = ({
  name,
  setFieldValue,
  value,
  label,
}: blogTextInputType) => {
  return (
    <BlogFormContentContainer>
      <Label>{label}</Label>
      <BlogTextArea
        name={name}
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
      />
    </BlogFormContentContainer>
  );
};

export default BlogTextInput;
