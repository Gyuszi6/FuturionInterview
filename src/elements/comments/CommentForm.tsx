import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import UserNameInput from "../inputs/UserNameInput";
import CommentTextInput from "../inputs/CommentTextInput";
import {
  CreateCommentCard,
  CreateCommentButton,
  CreateCommentButtonContainer,
} from "./styles";
import useComment from "./hooks/useComment";
import { useSelector } from "react-redux";

const commentSchema = yup.object().shape({
  userName: yup
    .string()
    .required("User name is required")
    .trim()
    .matches(/^[A-Za-z0-9_ ]{1,30}$/i, "Incorrect User Name"),
  comment: yup
    .string()
    .required("Comment text is required")
    .trim()
    .matches(/^[A-Za-z0-9_ ]{1,300}$/i, "Incorrect Comment"),
});

const CommentForm = () => {
  const { currentBlogId } = useSelector((state: any) => state.blog);
  const { createComment, getComments } = useComment();
  return (
    <Formik
      initialValues={{ userName: "", comment: "" }}
      validateOnMount={true}
      enableReinitialize={true}
      validationSchema={commentSchema}
      onSubmit={async ({ userName, comment }) => {
        await createComment(userName, comment);
        await getComments(currentBlogId);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <CreateCommentCard>
            <Field
              as={UserNameInput}
              name="userName"
              label="UserName"
              setFieldValue={setFieldValue}
            />
            <Field
              as={CommentTextInput}
              name="comment"
              label="Comment"
              setFieldValue={setFieldValue}
            />
            <CreateCommentButtonContainer>
              <CreateCommentButton type="submit">Comment</CreateCommentButton>
            </CreateCommentButtonContainer>
          </CreateCommentCard>
        </Form>
      )}
    </Formik>
  );
};

export default CommentForm;
