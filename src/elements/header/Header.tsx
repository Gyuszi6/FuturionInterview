import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import { useAppDispatch } from "../../store/hooks/useRedux";
import { SET_USER } from "../../store/states/userSlice";

const Header = () => {
  const dispatch = useAppDispatch();
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
