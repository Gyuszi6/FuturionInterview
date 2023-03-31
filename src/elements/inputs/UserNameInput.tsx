import { UserNameInputContainer, Label, UserNameInputField } from "./styles";

type userNameInputType = {
  name: string;
  setFieldValue: (name: string, val: string) => void;
  value: string;
  label: string;
};

const UserNameInput = ({
  name,
  setFieldValue,
  value,
  label,
}: userNameInputType) => {
  return (
    <UserNameInputContainer>
      <Label>{label}</Label>
      <UserNameInputField
        name={name}
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
      />
    </UserNameInputContainer>
  );
};

export default UserNameInput;
