import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ModifyBlogForm from "../ModifyBlogForm";
import userEvent from "@testing-library/user-event";

const mockedCurrentPage = jest.fn();
const mockedCurrentBlogId = jest.fn();
const mockedCurrentBlogTitle = jest.fn();
const mockedCurrentBlogText = jest.fn();

jest.mock("../../../store/hooks/useRedux", () => ({
  useAppSelector: () => ({
    currentPage: mockedCurrentPage(),
    currentBlogId: mockedCurrentBlogId(),
    currentBlogTitle: mockedCurrentBlogTitle(),
    currentBlogText: mockedCurrentBlogText(),
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

const mockedModifyBlogs = jest.fn();

jest.mock("../hooks/useModifyBlogs", () => ({
  __esModule: true,
  default: () => ({
    modifyBlogs: (
      id: number | string | null,
      title: string | null,
      text: string | null
    ) => mockedModifyBlogs(title, text, id),
  }),
}));

describe("ModifyBlogForm test", () => {
  it("should render component correctly", () => {
    render(<ModifyBlogForm />);
    expect(screen.getByTestId("ModifyBlogButtonTestId")).toBeInTheDocument();
    expect(screen.getByTestId("BlogTitleInputTestId")).toBeInTheDocument();
    expect(screen.getByTestId("BlogTextInputTestId")).toBeInTheDocument();
  });
  it("should call getBlogsFromCurrentPage and modifyBlogs function on button click", async () => {
    mockedCurrentPage.mockReturnValue(1);
    render(<ModifyBlogForm />);

    userEvent.type(screen.getByTestId("BlogTitleInputTestId"), "title");
    userEvent.type(screen.getByTestId("BlogTextInputTestId"), "blog text");
    fireEvent.click(screen.getByTestId("ModifyBlogButtonTestId"));

    await waitFor(() => {
      expect(mockedModifyBlogs).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(mockedGetBlogsFromCurrentPage).toHaveBeenCalled();
    });
  });
});
