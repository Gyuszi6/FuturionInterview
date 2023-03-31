import BlogElement from "./BlogElement";
import { useSelector, useDispatch } from "react-redux";
import useBlogs from "../../elements/blogs/hooks/useBlogs";
import { PageContainer, ChangePageButton, PageText } from "./styles";
import { SET_CURRENT_PAGE } from "../../store/states/blogSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const BlogList = () => {
  const { getBlogs, getBlogsFromCurrentPage } = useBlogs();
  const dispatch = useDispatch();
  const { blogs, currentPage, totalPage } = useSelector(
    (state: any) => state.blog
  );
  return (
    <>
      <PageContainer>
        <ChangePageButton
          onClick={async () => {
            if (currentPage > 1) {
              dispatch(SET_CURRENT_PAGE(currentPage - 1));
              await getBlogsFromCurrentPage(currentPage);
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
              dispatch(SET_CURRENT_PAGE(currentPage + 1));
              await getBlogsFromCurrentPage(currentPage);
            }
          }}
        >
          <AiOutlineArrowRight />
        </ChangePageButton>
      </PageContainer>
      <div>
        {blogs.map((blog: any) => {
          const date =
            blog.createdAt.slice(0, 10) +
            " " +
            blog.createdAt.slice(12, 20).replace(".", "");
          return (
            <BlogElement
              key={blog.id}
              id={blog.id}
              name={blog.title}
              date={date}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
