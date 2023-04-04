import { useAppSelector } from "../../store/hooks/useRedux";
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
    useAppSelector((state) => state.blog);
  const { backToMainPage } = useBlogDisplayPage();
  const { getComments } = useComment();

  useEffect(() => {
    (async () => {
      await getComments(currentBlogId);
    })();
  }, [getComments, currentBlogId]);
  return (
    <PageContainer>
      <LeavePageButton
        data-testid="leavePageButtonTestId"
        onClick={() => {
          backToMainPage();
        }}
      >
        <AiOutlineArrowLeft />
      </LeavePageButton>
      <CurrentBlogCard data-testid="currentBlogCardTestId">
        <ImageContainer>
          {currentBlogImg && (
            <CurrentBlogImg
              data-testid="currentBlogImgTestId"
              src={currentBlogImg}
              alt="img"
            />
          )}
        </ImageContainer>
        <TextContainer>
          <BlogTitle data-testid="currentBlogTitleTestId">
            {currentBlogTitle}
          </BlogTitle>
          <BlogText data-testid="currentBlogTextTestId">
            {currentBlogText}
          </BlogText>
        </TextContainer>
      </CurrentBlogCard>
      <CommentCardContainer>
        <CommentList />
      </CommentCardContainer>
    </PageContainer>
  );
};

export default BlogDisplayPage;
