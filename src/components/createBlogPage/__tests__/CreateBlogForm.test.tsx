import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CreateBlogForm from "../CreateBlogForm";
import userEvent from "@testing-library/user-event";

const mockedCurrentPage = jest.fn();

jest.mock("../../../store/hooks/useRedux", () => ({
  useAppSelector: () => ({
    currentPage: mockedCurrentPage(),
  }),
}));

const mockedGetBlogsFromCurrentPage = jest.fn();

jest.mock("../../../elements/blogs/hooks/useBlogs", () => ({
  __esModule: true,
  default: () => ({
    getBlogsFromCurrentPage: (page: number) =>
      mockedGetBlogsFromCurrentPage(page),
  }),
}));

const mockedCreateBlog = jest.fn();

jest.mock("../hooks/useCreateBlogs", () => ({
  __esModule: true,
  default: () => ({
    createBlog: (title: string, blogText: string) =>
      mockedCreateBlog(title, blogText),
  }),
}));

describe("CreateBlogForm test", () => {
  it("should render component correctly", () => {
    render(<CreateBlogForm />);
    expect(screen.getByTestId("CreatePostButtonTestId")).toBeInTheDocument();
    expect(screen.getByTestId("BlogTitleInputTestId")).toBeInTheDocument();
    expect(screen.getByTestId("BlogTextInputTestId")).toBeInTheDocument();
  });
  it("should call getBlogsFromCurrentPage and createBlog function on button click", async () => {
    mockedCurrentPage.mockReturnValue(1);
    render(<CreateBlogForm />);
    userEvent.type(screen.getByTestId("BlogTitleInputTestId"), "title");
    userEvent.type(screen.getByTestId("BlogTextInputTestId"), "blog text");
    fireEvent.click(screen.getByTestId("CreatePostButtonTestId"));
    await waitFor(() => {
      expect(mockedCreateBlog).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(mockedGetBlogsFromCurrentPage).toHaveBeenCalled();
    });
  });
});
