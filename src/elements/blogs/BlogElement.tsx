import {
  BlogCard,
  DateContainer,
  Title,
  Date,
  TitleContainer,
  AdminButtonContainer,
  AdminButton,
} from "./styles";
import { AiFillDelete } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useSelector } from "react-redux";
import useBlogs from "./hooks/useBlogs";
import useComment from "../comments/hooks/useComment";

type BlogType = {
  id: number;
  name: string;
  date: any;
};

const BlogElement = ({ id, name, date }: BlogType) => {
  const { getComments } = useComment();
  const { getCurrentBlog } = useBlogs();
  const { userState } = useSelector((state: any) => state.user);
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
          <AdminButton
            onClick={async () => {
              await getCurrentBlog(id);
            }}
          >
            <BiMenu />
          </AdminButton>
          <AdminButton>
            <AiFillDelete />
          </AdminButton>
        </AdminButtonContainer>
      )}
    </BlogCard>
  );
};

export default BlogElement;
