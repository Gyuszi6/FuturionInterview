import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import TitleInput from "../../elements/inputs/TitleInput";
import BlogTextInput from "../../elements/inputs/BlogTextInput";
import { SavePostButton, TitleContainer, FormContainer } from "./styles";
import useChangeBlogs from "./hooks/useCreateBlogs";
import useBlogs from "../../elements/blogs/hooks/useBlogs";
import { useSelector } from "react-redux";

const blogSchema = yup.object().shape({
  title: yup.string().required("Title is required").trim(),
  blogText: yup.string().required("Blog text is required").trim(),
});

const CreateBlogForm = () => {
  const { currentPage } = useSelector((state: any) => state.blog);
  const { getBlogsFromCurrentPage } = useBlogs();
  const { createBlog } = useChangeBlogs();
  return (
    <FormContainer>
      <Formik
        initialValues={{ title: "", blogText: "" }}
        validateOnMount={true}
        enableReinitialize={true}
        validationSchema={blogSchema}
        onSubmit={async ({ title, blogText }) => {
          await createBlog(title, blogText);
          await getBlogsFromCurrentPage(currentPage);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <TitleContainer>
              <Field
                as={TitleInput}
                name="title"
                label="Title:"
                setFieldValue={setFieldValue}
              />
              <SavePostButton type="submit">Create</SavePostButton>
            </TitleContainer>
            <Field
              as={BlogTextInput}
              name="blogText"
              label="Blog"
              setFieldValue={setFieldValue}
            />
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default CreateBlogForm;
