import Header from "../../elements/header/Header";
import BlogList from "../../elements/blogs/BlogList";
import { PageContainer } from "./styles";

const PublicPage = () => {
  return (
    <PageContainer>
      <Header />
      <BlogList />
    </PageContainer>
  );
};

export default PublicPage;
