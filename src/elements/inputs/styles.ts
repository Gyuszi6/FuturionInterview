import styled from "styled-components";

export const UserNameInputContainer = styled.div`
  margin-left: 5%;
`;

export const CommentTextContainer = styled.div``;

export const Label = styled.label`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const CommentTextArea = styled.textarea`
  background-color: #d9adad;
  overflow-y: scroll;
  resize: none;
  border: none;
  border-radius: 8px;
  height: 55px;
  width: 300px;
`;

export const UserNameInputField = styled.input``;

export const BlogFormInputContainer = styled.div`
  display: flex;
`;

export const BlogFormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlogTitleLabel = styled.label`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  font-weight: bold;
  margin-top: 3.5px;
`;

export const BlogTitleInputBox = styled.input`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-bottom: 50px;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 12px 4px rgba(0, 0, 0, 0.2);
  padding-left: 4px;
  font-size: 20px;
  font-family: cursive;
`;

export const BlogTextArea = styled.textarea`
  overflow-y: scroll;
  margin-top: 5px;
  padding: 10px;
  resize: none;
  width: 100%;
  height: 650px;
  box-sizing: border-box;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 6px 12px 9px rgba(0, 0, 0, 0.2);
  font-size: 17px;
  font-family: cursive;
`;
