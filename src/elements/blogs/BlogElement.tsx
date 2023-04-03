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
        onClick={async () => {
          await getCurrentBlog(id);
          await getComments(id);
        }}
      >
        <Title>{name}</Title>
      </TitleContainer>
      <DateContainer
        onClick={async () => {
          await getCurrentBlog(id);
          await getComments(id);
        }}
      >
        <Date>{date}</Date>
      </DateContainer>
      {userState === "admin" && (
        <AdminButtonContainer>
          <ModifyBlogButton
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
