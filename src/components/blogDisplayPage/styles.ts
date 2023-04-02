import styled from "styled-components";

export const CommentCardContainer = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  background: white;
  margin-top: 30px;
  padding-bottom: 30px;
  border-radius: 6px;
`;

export const CurrentBlogCard = styled.div`
  width: 75%;
  height: 400px;
  margin: auto;
  background: white;
  border: none;
  border-radius: 6px;
  display: flex;
  overflow-y: hidden;

  @media screen and (max-width: 800px) {
    display: block;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  border-right: 1px black solid;

  @media screen and (max-width: 800px) {
    border-right: none;
    border-bottom: 1px black solid;
    width: 100%;
    height: 230px;
  }
`;

export const CurrentBlogImg = styled.img`
  display: flex;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 230px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-right: 15px;
  padding-left: 15px;
  overflow-y: scroll;
`;

export const BlogTitle = styled.h1`
  text-align: center;
`;

export const BlogText = styled.p`
  overflow-y: hidden;

  @media screen and (max-width: 800px) {
    margin-right: 25px;
    margin-left: 9px;
  }
`;

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
    margin-left: 35px;
    margin-bottom: 20px;
  }
`;

export const PageContainer = styled.div`
  background: linear-gradient(45deg, #ed4264, #ffedbc);
  min-height: 100vh;
  padding-bottom: 20px;
`;
