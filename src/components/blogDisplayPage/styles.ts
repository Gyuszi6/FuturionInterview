import styled from "styled-components";

export const CurrentBlogCard = styled.div`
  width: 70%;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border: 3px black solid;
  border-radius: 6px;
  display: flex;
  overflow-y: hidden;
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
`;

export const TextContainer = styled.div`
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
`;

export const LeavePageButton = styled.button`
  margin-top: 60px;
  margin-left: 60px;
  width: 50px;
  height: 50px;
  border-radius: 24px;
  font-size: 24px;
  padding-top: 6px;
  padding-left: 5px;
  cursor: pointer;
`;
