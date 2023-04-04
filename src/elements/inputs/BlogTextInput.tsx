import { BlogFormContentContainer, Label, BlogTextArea } from "./styles";

type BlogTextInputType = {
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
}: BlogTextInputType) => {
  return (
    <BlogFormContentContainer>
      <Label>{label}</Label>
      <BlogTextArea
        data-testid="BlogTextInputTestId"
        name={name}
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
      />
    </BlogFormContentContainer>
  );
};

export default BlogTextInput;
