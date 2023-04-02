import { useSelector } from "react-redux";
import {
  CurrentBlogCard,
  ImageContainer,
  TextContainer,
  BlogTitle,
  LeavePageButton,
  BlogText,
  PageContainer,
  CommentCardContainer,
  CurrentBlogImg,
} from "./styles";
import useBlogDisplayPage from "./hooks/useBlogDisplayPage";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CommentList from "../../elements/comments/CommentList";
import useComment from "../../elements/comments/hooks/useComment";
import { useEffect } from "react";

const BlogDisplayPage = () => {
  const { currentBlogTitle, currentBlogText, currentBlogImg, currentBlogId } =
    useSelector((state: any) => state.blog);
  const { backToMainPage } = useBlogDisplayPage();
  const { getComments } = useComment();

  useEffect(() => {
    getComments(currentBlogId);
  }, [getComments, currentBlogId]);
  return (
    <PageContainer>
      <LeavePageButton
        onClick={() => {
          backToMainPage();
        }}
      >
        <AiOutlineArrowLeft />
      </LeavePageButton>
      <CurrentBlogCard>
        <ImageContainer>
          <CurrentBlogImg src={currentBlogImg} alt="img" />
        </ImageContainer>
        <TextContainer>
          <BlogTitle>{currentBlogTitle}</BlogTitle>
          <BlogText>{currentBlogText}</BlogText>
        </TextContainer>
      </CurrentBlogCard>
      <CommentCardContainer>
        <CommentList />
      </CommentCardContainer>
    </PageContainer>
  );
};

export default BlogDisplayPage;
