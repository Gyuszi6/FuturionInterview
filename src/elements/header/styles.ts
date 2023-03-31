import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background: grey;
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  background: transparent;
  border: none;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;
