import BlogElement from "./BlogElement";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useRedux";
import useBlogs from "../../elements/blogs/hooks/useBlogs";
import {
  PageContainer,
  ChangePageButton,
  PageText,
  CreateBlogButton,
  BlogListContainer,
  CreateBlogButtonContainer,
  HorizontalDivider,
  BlogCardContainer,
  CreateButtonLabel,
  Spinner,
} from "./styles";
import { SET_CURRENT_PAGE } from "../../store/states/blogSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useEffect } from "react";

type BlogType = {
  id: number;
  title: string;
  createdAt: string;
  body: string;
};

const BlogList = () => {
  const { getBlogs, getBlogsFromCurrentPage } = useBlogs();
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { blogs, currentPage, totalPage, loading } = useAppSelector(
    (state) => state.blog
  );
  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line
  }, []);

  const { userState } = useAppSelector((state) => state.user);
  return (
    <BlogListContainer>
      <PageContainer data-testid="changePageContainerTestId">
        <ChangePageButton
          data-testid="prevPageButtonTestId"
          onClick={async () => {
            if (currentPage > 1) {
              dispatch(SET_CURRENT_PAGE(Number(currentPage) - 1));
              await getBlogsFromCurrentPage(currentPage - 1);
            }
          }}
        >
          <AiOutlineArrowLeft />
        </ChangePageButton>
        <PageText data-testid="currentPageTestId">{currentPage} - </PageText>
        <PageText data-testid="totalPageTestId"> / {totalPage}</PageText>
        <ChangePageButton
          data-testid="nextPageButtonTestId"
          onClick={async () => {
            if (currentPage < totalPage) {
              dispatch(SET_CURRENT_PAGE(Number(currentPage) + 1));
              await getBlogsFromCurrentPage(currentPage + 1);
            }
          }}
        >
          <AiOutlineArrowRight />
        </ChangePageButton>
      </PageContainer>
      {userState === "admin" && (
        <CreateBlogButtonContainer>
          <CreateBlogButton
            data-testid="createBlogButtonTestId"
            onClick={() => {
              nav("/create");
            }}
          >
            +
          </CreateBlogButton>
          <CreateButtonLabel
            data-testid="createBlogLabelTestId"
            onClick={() => {
              nav("/create");
            }}
          >
            Create new post
          </CreateButtonLabel>
        </CreateBlogButtonContainer>
      )}
      {blogs.length === 0 && loading && <Spinner data-testid="spinnerTestId" />}
      <BlogCardContainer data-testid="blogCardContainerTestId">
        {blogs.map((blog: BlogType) => {
          const date =
            blog.createdAt.slice(0, 10) +
            " " +
            blog.createdAt.slice(11, 20).replace(".", "");
          return (
            <div key={blog.id}>
              <BlogElement
                id={blog.id}
                name={blog.title}
                date={date}
                text={blog.body}
              />
              <HorizontalDivider />
            </div>
          );
        })}
      </BlogCardContainer>
    </BlogListContainer>
  );
};

export default BlogList;
