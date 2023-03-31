import { BlogFormInputContainer, Label } from "./styles";

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
    <BlogFormInputContainer>
      <Label>{label}</Label>
      <input
        name={name}
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
      />
    </BlogFormInputContainer>
  );
};

export default BlogTextInput;
