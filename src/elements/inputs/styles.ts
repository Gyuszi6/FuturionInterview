import styled from "styled-components";

export const UserNameInputContainer = styled.div`
  margin-left: 5%;

  @media screen and (max-width: 800px) {
    margin-left: 2px;
  }
`;

export const CommentTextContainer = styled.div``;

export const Label = styled.label`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const UserNameLabel = styled.label`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  font-weight: bold;
  @media screen and (max-width: 800px) {
    margin-left: 10px;
  }
`;

export const CommentTextLabel = styled.label`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  font-weight: bold;
  @media screen and (max-width: 800px) {
    margin-left: 10px;
  }
`;

export const CommentTextArea = styled.textarea`
  overflow-y: scroll;
  resize: none;
  border: none;
  height: 80px;
  width: 250px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 12px 4px rgba(0, 0, 0, 0.2);
  padding-left: 4px;
  font-size: 15px;
  margin-right: 10px;

  @media screen and (max-width: 800px) {
    display: flex;
    width: 230px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }
`;

export const UserNameInputField = styled.input`
  width: 180px;
  margin-right: 16px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 12px 4px rgba(0, 0, 0, 0.2);
  border: none;
  padding-left: 2px;

  @media screen and (max-width: 800px) {
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-bottom: 10px;
  }
`;

export const BlogFormInputContainer = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 800px) {
    margin-left: 10px;
  }
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

  @media screen and (max-width: 800px) {
    width: 100px;
    margin-bottom: 30px;
  }
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

  @media screen and (max-width: 800px) {
    height: 480px;
  }
`;
