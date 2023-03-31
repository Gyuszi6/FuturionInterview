import styled from "styled-components";

export const BlogCard = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  border: 2px black solid;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const TitleContainer = styled.div`
  width: 80%;
  height: 100px;
  border-right: 2px black solid;
  text-align: center;
  cursor: pointer;
`;

export const Title = styled.p`
  margin-top: 25px;
`;

export const DateContainer = styled.div`
  width: 20%;
  height: 100px;
  text-align: center;
  cursor: pointer;
`;

export const Date = styled.p`
  margin-top: 25px;
`;

export const AdminButtonContainer = styled.div`
  width: 10%;
  height: 100px;
  border-left: 2px black solid;
  justify-content: center;
`;

export const AdminButton = styled.button`
  display: block;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 60px;
`;

export const ChangePageButton = styled.button`
  cursor: pointer;
  background: transparent;
  height: 30px;
  margin-top: 12px;
  margin-right: 12px;
  margin-left: 12px;
  font-size: 18px;
  border: none;
`;

export const PageText = styled.p`
  height: 30px;
  font-size: 18px;
  margin-top: 14px;
`;

export const BlogListContainer = styled.div``;

export const CreateBlogButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const CreateBlogButton = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 70px;
  height: 70px;
  border-radius: 32px;
  margin-left: auto;
  margin-right: auto;
  font-size: 55px;
  cursor: pointer;
`;
