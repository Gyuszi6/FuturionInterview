import styled from "styled-components";

export const CreateCommentCard = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 120px;
  justify-content: space-between;
  padding-top: 10px;

  @media screen and (max-width: 800px) {
    display: block;
    justify-content: center;
    height: 140px;
    margin-bottom: 140px;
  }
`;

export const CommentCard = styled.div`
  display: block;
  border: none;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 100px;
  background: linear-gradient(45deg, #eb788f, #ffe3bc);
  border-radius: 8px;
  font-family: cursive;
  overflow-y: auto;

  @media screen and (max-width: 800px) {
    height: 140px;
  }
`;

export const CommentElementContainer = styled.div`
  display: block;
  @media screen and (max-width: 800px) {
    margin-top: 110px;
  }
`;

export const CreateCommentButtonContainer = styled.div`
  display: flex;
  margin-right: 5%;
  @media screen and (max-width: 800px) {
    margin-right: 0;
    width: 100%;
  }
`;

export const CreateCommentButton = styled.button`
  height: 40px;
  margin-top: 25px;
  margin-right: 5%;
  width: 90px;
  cursor: pointer;
  margin-bottom: 30px;
  border-radius: 24px;
  border: 1px grey solid;

  &:hover {
    background: linear-gradient(45deg, #ed4264, #ffedbc);
  }

  @media screen and (max-width: 800px) {
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

export const UserNameText = styled.p`
  margin-top: 0;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 0;
  margin-left: 20px;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const CommentText = styled.p`
  margin-top: 0;
  margin-left: 20px;
  overflow-y: hidden;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const UserNameContainer = styled.div`
  margin-right: 0;
`;

export const CommentPageContainer = styled.div``;

export const ErrorContainer = styled.div`
  display: block;
  margin-left: 20px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  font-size: 16px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const MobileErrorContainer = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    text-align: center;
    margin-top: 0;
  }
`;

export const Container = styled.div``;
