import {
  BlogCard,
  DateContainer,
  Title,
  Date,
  TitleContainer,
  AdminButtonContainer,
  ModifyBlogButton,
  DeleteBlogButton,
} from "./styles";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useRedux";
import useBlogs from "./hooks/useBlogs";
import useComment from "../comments/hooks/useComment";
import {
  SET_CURRENT_BLOG_ID,
  SET_CURRENT_BLOG_TEXT,
  SET_CURRENT_BLOG_TITLE,
} from "../../store/states/blogSlice";
import { useNavigate } from "react-router";

type BlogType = {
  id: number;
  name: string;
  date: string;
  text: string;
};

const BlogElement = ({ id, name, date, text }: BlogType) => {
  const { getComments } = useComment();
  const { getCurrentBlog, deleteBlog, getBlogs } = useBlogs();
  const dispatch = useAppDispatch();
  const { userState } = useAppSelector((state) => state.user);
  const nav = useNavigate();

  return (
    <BlogCard key={id}>
      <TitleContainer
        data-testid="TitleContainerTestId"
        onClick={async () => {
          await getCurrentBlog(id);
          await getComments(id);
        }}
      >
        <Title data-testid="blogTitleTestId">{name}</Title>
      </TitleContainer>
      <DateContainer
        data-testid="dateContainerTestId"
        onClick={async () => {
          await getCurrentBlog(id);
          await getComments(id);
        }}
      >
        <Date data-testid="blogDateTestId">{date}</Date>
      </DateContainer>
      {userState === "admin" && (
        <AdminButtonContainer>
          <ModifyBlogButton
            data-testid="blogModifyButtonTestId"
            onClick={() => {
              dispatch(SET_CURRENT_BLOG_ID(id));
              dispatch(SET_CURRENT_BLOG_TITLE(name));
              dispatch(SET_CURRENT_BLOG_TEXT(text));
              nav("/modify");
            }}
          >
            <BiEditAlt />
          </ModifyBlogButton>
          <DeleteBlogButton
            data-testid="blogDeleteButtonTestId"
            onClick={async () => {
              await deleteBlog(id);
              await getBlogs();
            }}
          >
            <AiFillDelete />
          </DeleteBlogButton>
        </AdminButtonContainer>
      )}
    </BlogCard>
  );
};

export default BlogElement;
