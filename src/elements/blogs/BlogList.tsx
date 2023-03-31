import BlogElement from "./BlogElement";
import { useSelector, useDispatch } from "react-redux";
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
} from "./styles";
import { SET_CURRENT_PAGE } from "../../store/states/blogSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const BlogList = () => {
  const { getBlogs, getBlogsFromCurrentPage } = useBlogs();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { blogs, currentPage, totalPage } = useSelector(
    (state: any) => state.blog
  );
  useEffect(() => {
    getBlogs();
  }, []);

  const { userState } = useSelector((state: any) => state.user);
  return (
    <BlogListContainer>
      <PageContainer>
        <ChangePageButton
          onClick={async () => {
            if (currentPage > 1) {
              dispatch(SET_CURRENT_PAGE(Number(currentPage) - 1));
              await getBlogsFromCurrentPage(currentPage - 1);
            }
          }}
        >
          <AiOutlineArrowLeft />
        </ChangePageButton>
        <PageText>{currentPage} - </PageText>
        <PageText> / {totalPage}</PageText>
        <ChangePageButton
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
            onClick={() => {
              nav("/create");
            }}
          >
            +
          </CreateBlogButton>
          <CreateButtonLabel
            onClick={() => {
              nav("/create");
            }}
          >
            Create new post
          </CreateButtonLabel>
        </CreateBlogButtonContainer>
      )}
      <BlogCardContainer>
        {blogs.map((blog: any) => {
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
