import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BlogList from "../BlogList";

const mockedDispatch = jest.fn();
const mockedCurrentPage = jest.fn();
const mockedTotalPage = jest.fn();
const mockedLoading = jest.fn();
const mockedUserStatae = jest.fn();
const mockedBlogs = jest.fn();

jest.mock("../../../store/hooks/useRedux", () => ({
  useAppDispatch: () => mockedDispatch,
  useAppSelector: () => ({
    blogs: mockedBlogs(),
    currentPage: mockedCurrentPage(),
    totalPage: mockedTotalPage(),
    loading: mockedLoading(),
    userState: mockedUserStatae(),
  }),
}));

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...(jest.requireActual("react-router") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const mockedSetCurrentPage = jest.fn();

jest.mock("../../../store/states/blogSlice", () => ({
  SET_CURRENT_PAGE: (page: number) => mockedSetCurrentPage(page),
}));

const mockedGetBlogs = jest.fn();
const mockedGetBlogsFromCurrentPage = jest.fn();

jest.mock("../hooks/useBlogs", () => ({
  __esModule: true,
  default: () => ({
    getBlogs: () => mockedGetBlogs(),
    getBlogsFromCurrentPage: (page: number) =>
      mockedGetBlogsFromCurrentPage(page),
  }),
}));

jest.mock("../BlogElement", () => {
  return () => {
    return <div></div>;
  };
});

describe("BlogList test", () => {
  it("should render page correctly if admin", () => {
    mockedBlogs.mockReturnValue([]);
    mockedUserStatae.mockReturnValue("admin");
    render(<BlogList />);
    expect(screen.getByTestId("changePageContainerTestId")).toBeInTheDocument();
    expect(screen.getByTestId("createBlogButtonTestId")).toBeInTheDocument();
    expect(screen.getByTestId("createBlogLabelTestId")).toBeInTheDocument();
    expect(screen.getByTestId("blogCardContainerTestId")).toBeInTheDocument();
  });
  it("should render page correctly if public", () => {
    mockedBlogs.mockReturnValue([]);
    mockedUserStatae.mockReturnValue("public");
    render(<BlogList />);
    expect(
      screen.queryByTestId("createBlogButtonTestId")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("createBlogLabelTestId")
    ).not.toBeInTheDocument();
  });
  it("should show loading spinner", () => {
    mockedBlogs.mockReturnValue([]);
    mockedLoading.mockReturnValue(true);
    render(<BlogList />);
    expect(screen.getByTestId("spinnerTestId")).toBeInTheDocument();
  });
  it("should change page when prev page button clicked", async () => {
    mockedBlogs.mockReturnValue([]);
    mockedCurrentPage.mockReturnValue(2);
    mockedTotalPage.mockReturnValue(3);
    render(<BlogList />);
    fireEvent.click(screen.getByTestId("prevPageButtonTestId"));
    expect(mockedSetCurrentPage).toHaveBeenCalled();
    await waitFor(() => {
      expect(mockedGetBlogsFromCurrentPage).toHaveBeenCalledWith(1);
    });
  });
  it("should change page when next page button clicked", async () => {
    mockedBlogs.mockReturnValue([]);
    mockedCurrentPage.mockReturnValue(2);
    mockedTotalPage.mockReturnValue(3);
    render(<BlogList />);
    fireEvent.click(screen.getByTestId("nextPageButtonTestId"));
    expect(mockedSetCurrentPage).toHaveBeenCalled();
    await waitFor(() => {
      expect(mockedGetBlogsFromCurrentPage).toHaveBeenCalledWith(3);
    });
  });
  it("should navigate to createBlogForm when button is clicked", () => {
    mockedBlogs.mockReturnValue([]);
    mockedUserStatae.mockReturnValue("admin");
    render(<BlogList />);
    fireEvent.click(screen.getByTestId("createBlogButtonTestId"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/create");
  });
});
