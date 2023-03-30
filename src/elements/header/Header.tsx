import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import { useNavigate } from "react-router";

const Header = () => {
  const nav = useNavigate();
  return (
    <HeaderContainer>
      <HeaderButtonContainer>
        <HeaderButton
          onClick={() => {
            nav("/public");
          }}
        >
          Public
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            nav("/admin");
          }}
        >
          Admin
        </HeaderButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
