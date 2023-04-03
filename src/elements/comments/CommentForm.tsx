import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import UserNameInput from "../inputs/UserNameInput";
import CommentTextInput from "../inputs/CommentTextInput";
import {
  CreateCommentCard,
  CreateCommentButton,
  CreateCommentButtonContainer,
  ErrorContainer,
  ErrorMessage,
  Container,
  MobileErrorContainer,
} from "./styles";
import useComment from "./hooks/useComment";
import { useAppSelector } from "../../store/hooks/useRedux";

const commentSchema = yup.object().shape({
  userName: yup.string().required("User name is required").trim(),
  comment: yup.string().required("Comment text is required").trim(),
});

const CommentForm = () => {
  const { currentBlogId } = useAppSelector((state) => state.blog);
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
      {({ setFieldValue, errors, touched }) => (
        <Form>
          <CreateCommentCard>
            <Container>
              <Field
                as={UserNameInput}
                name="userName"
                label="UserName"
                setFieldValue={setFieldValue}
                touched={touched["userName"]}
                errors={errors["userName"]}
              />
              <ErrorContainer>
                {Object.entries(errors).map(
                  ([name, errorKey]) =>
                    (touched["userName"] || touched["comment"]) && (
                      <ErrorMessage key={name}>{errorKey}</ErrorMessage>
                    )
                )}
              </ErrorContainer>
            </Container>
            <Field
              as={CommentTextInput}
              name="comment"
              label="Comment"
              setFieldValue={setFieldValue}
              touched={touched["comment"]}
              errors={errors["comment"]}
            />
            <CreateCommentButtonContainer>
              <CreateCommentButton type="submit">Comment</CreateCommentButton>
            </CreateCommentButtonContainer>
            <MobileErrorContainer>
              {Object.entries(errors).map(
                ([name, errorKey]) =>
                  (touched["userName"] || touched["comment"]) && (
                    <ErrorMessage key={name}>{errorKey}</ErrorMessage>
                  )
              )}
            </MobileErrorContainer>
          </CreateCommentCard>
        </Form>
      )}
    </Formik>
  );
};

export default CommentForm;
