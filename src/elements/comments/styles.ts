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
  }
`;

export const CommentCard = styled.div`
  display: flex;
  border: none;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 90px;
  background: linear-gradient(45deg, #eb788f, #ffe3bc);
  border-radius: 8px;
  font-family: cursive;
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
  }
`;

export const UserNameText = styled.p`
  margin-top: 26px;
  font-weight: bold;
  font-size: 19px;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const CommentText = styled.p`
  margin-top: 10px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    overflow-y: transparent scroll;
  }
`;

export const UserNameContainer = styled.div`
  height: 100%;
  width: 19%;
  margin-right: 40px;
  text-align: center;
`;

export const CommentPageContainer = styled.div``;
