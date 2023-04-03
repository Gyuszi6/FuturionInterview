import styled from "styled-components";

export const BlogCard = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  border-radius: 8px;
  background: linear-gradient(45deg, #eb788f, #ffe3bc);

  &:hover {
    box-shadow: 0px 6px 12px 3px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }

  @media screen and (max-width: 800px) {
    display: block;
    height: 200px;
  }
`;

export const BlogCardContainer = styled.div``;

export const TitleContainer = styled.div`
  width: 80%;
  height: 100px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;

  @media screen and (max-width: 800px) {
    height: 100px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Title = styled.p`
  font-size: 19px;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    font-size: 13px;
  }
`;

export const DateContainer = styled.div`
  width: 20%;
  height: 100px;
  justify-content: center;
  cursor: pointer;
  border: 0;

  @media screen and (max-width: 800px) {
    display: flex;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Date = styled.p`
  font-size: 19px;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    text-align: center;
    margin-top: 0;
  }
`;

export const AdminButtonContainer = styled.div`
  width: 10%;
  height: 100px;
  justify-content: center;
  border: 0;

  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    height: 90px;
    justify-content: space-between;
  }
`;

export const ModifyBlogButton = styled.button`
  display: block;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  font-size: 22px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const DeleteBlogButton = styled.button`
  display: block;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  font-size: 22px;
  border: 0;
  color: #870303;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 20px;
  height: 60px;
`;

export const ChangePageButton = styled.button`
  cursor: pointer;
  background: transparent;
  height: 30px;
  margin-top: 20px;
  margin-right: 12px;
  margin-left: 12px;
  font-size: 18px;
  border: none;
  font-weight: bold;
`;

export const PageText = styled.p`
  height: 30px;
  font-size: 18px;
  margin-top: 22px;
  font-weight: bold;
`;

export const BlogListContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  justify-content: center;
  margin: 20px auto 60px;
  border-radius: 6px;
  background: white;
`;

export const HorizontalDivider = styled.div`
  margin: 15px 0;
  width: 45%;
  height: 1px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(90deg, white, #73716f, white);
`;

export const CreateBlogButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  margin: 0 auto 30px;
`;

export const CreateButtonLabel = styled.p`
  margin: 5px auto;
  cursor: pointer;
`;

export const CreateBlogButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 32px;
  margin-left: auto;
  margin-right: auto;
  font-size: 35px;
  cursor: pointer;

  &:hover {
    animation-duration: 1s;
    animation-name: move;
    @keyframes move {
      from {
        transform: rotate(0);
        width: 45px;
        height: 45px;
      }
      to {
        transform: rotate(360deg);
        width: 60px;
        height: 60px;
      }
    }
    transform: rotate(360deg);
    width: 60px;
    height: 60px;
    border-radius: 36px;
  }

  animation-duration: 1s;
  animation-name: moveback;
  @keyframes moveback {
    from {
      transform: rotate(0);
      width: 60px;
      height: 60px;
    }
    to {
      transform: rotate(360deg);
      width: 45px;
      height: 45px;
    }
  }
`;

export const Spinner = styled.div`
  border-top: 3px solid grey;
  border-right: 3px solid grey;
  border-bottom: 3px solid grey;
  border-left: 5px solid black;
  background: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 48%;
  animation: rotate 1s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 800px) {
    left: 45%;
  }
`;
