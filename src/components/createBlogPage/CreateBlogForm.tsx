import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import TitleInput from "../../elements/inputs/TitleInput";
import BlogTextInput from "../../elements/inputs/BlogTextInput";
import { SavePostButton } from "./styles";
import useChangeBlogs from "./hooks/useCreateBlogs";
import useBlogs from "../../elements/blogs/hooks/useBlogs";
import { useSelector } from "react-redux";

const blogSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .trim()
    .matches(/^[A-Za-z0-9_ ]{1,30}$/i, "Incorrect title"),
  blogText: yup
    .string()
    .required("Blog text is required")
    .trim()
    .matches(/^[A-Za-z0-9_ ]{1,500}$/i, "Incorrect blog text"),
});

const CreateBlogForm = () => {
  const { currentPage } = useSelector((state: any) => state.blog);
  const { getBlogsFromCurrentPage } = useBlogs();
  const { createBlog } = useChangeBlogs();
  return (
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
          <div>
            <Field
              as={TitleInput}
              name="title"
              label="Title"
              setFieldValue={setFieldValue}
            />
            <Field
              as={BlogTextInput}
              name="blogText"
              label="Blog"
              setFieldValue={setFieldValue}
            />
            <SavePostButton type="submit">Save</SavePostButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateBlogForm;
