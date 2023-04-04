import {
  UserNameInputContainer,
  UserNameLabel,
  UserNameInputField,
} from "./styles";

type UserNameInputType = {
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
}: UserNameInputType) => {
  return (
    <UserNameInputContainer>
      <UserNameLabel>{label}</UserNameLabel>
      <UserNameInputField
        data-testid="userNameInputTestId"
        name={name}
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
      />
    </UserNameInputContainer>
  );
};

export default UserNameInput;
