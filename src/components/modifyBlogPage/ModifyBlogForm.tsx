import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import TitleInput from "../../elements/inputs/TitleInput";
import BlogTextInput from "../../elements/inputs/BlogTextInput";
import {
  FormContainer,
  SavePostButton,
  TitleContainer,
  ErrorContainer,
  ErrorMessage,
} from "./styles";
import useModifyBlogs from "./hooks/useModifyBlogs";
import useBlogs from "../../elements/blogs/hooks/useBlogs";
import { useAppSelector } from "../../store/hooks/useRedux";

const blogSchema = yup.object().shape({
  title: yup.string().required("Title is required").trim(),
  blogText: yup.string().required("Blog text is required").trim(),
});

const ModifyBlogForm = () => {
  const { currentPage, currentBlogId, currentBlogTitle, currentBlogText } =
    useAppSelector((state) => state.blog);
  const { getBlogsFromCurrentPage } = useBlogs();
  const { modifyBlogs } = useModifyBlogs();
  return (
    <FormContainer>
      <Formik
        initialValues={{ title: currentBlogTitle, blogText: currentBlogText }}
        validateOnMount={true}
        enableReinitialize={true}
        validationSchema={blogSchema}
        onSubmit={async ({ title, blogText }) => {
          await modifyBlogs(currentBlogId, title, blogText);
          await getBlogsFromCurrentPage(currentPage);
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form>
            <div>
              <TitleContainer>
                <Field
                  as={TitleInput}
                  name="title"
                  label="Title:"
                  setFieldValue={setFieldValue}
                  touched={touched["title"]}
                  errors={errors["title"]}
                />
                <SavePostButton
                  data-testid="ModifyBlogButtonTestId"
                  type="submit"
                >
                  Save
                </SavePostButton>
              </TitleContainer>
              <Field
                as={BlogTextInput}
                name="blogText"
                label="Blog"
                setFieldValue={setFieldValue}
                errors={errors["blogText"]}
                touched={touched["blogText"]}
              />
            </div>
            <ErrorContainer>
              {Object.entries(errors).map(
                ([name, errorKey]) =>
                  (touched["title"] || touched["blogText"]) && (
                    <ErrorMessage key={name}>{errorKey}</ErrorMessage>
                  )
              )}
            </ErrorContainer>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default ModifyBlogForm;
