import styled from "styled-components";

export const CreateCommentCard = styled.div`
  display: flex;
  border: 2px black solid;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: 90px;
  justify-content: space-between;
  padding-top: 10px;
`;

export const CommentCard = styled.div`
  display: flex;
  border: 2px black solid;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: 90px;
`;

export const CreateCommentButton = styled.button`
  height: 50px;
  margin-top: 10px;
  margin-right: 5%;
  cursor: pointer;
`;

export const UserNameText = styled.p`
  margin-top: 32px;
`;

export const CommentText = styled.p`
  margin-top: 10px;
`;

export const UserNameContainer = styled.div`
  height: 100%;
  width: 19%;
  border-right: 2px black solid;
  margin-right: 40px;
  text-align: center;
`;
