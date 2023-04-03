import styled from "styled-components";

export const LeavePageButton = styled.button`
  margin-top: 60px;
  margin-left: 60px;
  width: 50px;
  height: 50px;
  border-radius: 24px;
  font-size: 42px;
  padding-top: 6px;
  padding-left: 5px;
  cursor: pointer;
  border: none;
  background: transparent;

  @media screen and (max-width: 800px) {
    margin-left: 25px;
  }
`;

export const ModifyBlogPageContainer = styled.div`
  width: 600px;
  height: 800px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 800px) {
    width: 300px;
    height: 650px;
    margin-top: 20px;
  }
`;

export const SavePostButton = styled.button`
  margin-bottom: 0;
  cursor: pointer;
  width: 110px;
  height: 33px;
  border-radius: 24px;
  border: 1px grey solid;

  &:hover {
    background: linear-gradient(45deg, #ed4264, #ffedbc);
  }

  @media screen and (max-width: 800px) {
    margin-top: 10px;
    height: 50px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 0;
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  background: white;

  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
`;

export const PageContainer = styled.div`
  background: linear-gradient(45deg, #ed4264, #ffedbc);
  min-height: 100vh;

  @media screen and (max-width: 800px) {
    padding-bottom: 30px;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
    margin-top: 5px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 0;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;
