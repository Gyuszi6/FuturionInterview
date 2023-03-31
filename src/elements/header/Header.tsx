import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../store/states/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <HeaderButtonContainer>
        <HeaderButton
          onClick={() => {
            dispatch(SET_USER("public"));
          }}
        >
          Public
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            dispatch(SET_USER("admin"));
          }}
        >
          Admin
        </HeaderButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
