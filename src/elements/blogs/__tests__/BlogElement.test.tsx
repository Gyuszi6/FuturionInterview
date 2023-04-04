import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BlogElement from "../BlogElement";

const mockedDispatch = jest.fn();
const mockedUserState = jest.fn();

jest.mock("../../../store/hooks/useRedux", () => ({
  useAppDispatch: () => mockedDispatch,
  useAppSelector: () => ({
    userState: mockedUserState(),
  }),
}));

const mockedSetCurrentBlogId = jest.fn();
const mockedSetCurrentBlogText = jest.fn();
const mockedSetCurrentBlogTitle = jest.fn();

jest.mock("../../../store/states/blogSlice", () => ({
  SET_CURRENT_BLOG_ID: (id: number | null | string) =>
    mockedSetCurrentBlogId(id),
  SET_CURRENT_BLOG_TEXT: (text: string | null) =>
    mockedSetCurrentBlogText(text),
  SET_CURRENT_BLOG_TITLE: (title: string | null) =>
    mockedSetCurrentBlogTitle(title),
}));

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...(jest.requireActual("react-router") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const mockedGetComments = jest.fn();

jest.mock("../../comments/hooks/useComment", () => ({
  __esModule: true,
  default: () => ({
    getComments: (id: string | number | null) => mockedGetComments(id),
  }),
}));

const mockedGetCurrentBlog = jest.fn();
const mockedDeleteBlog = jest.fn();
const mockedGetBlogs = jest.fn();

jest.mock("../hooks/useBlogs", () => ({
  __esModule: true,
  default: () => ({
    getCurrentBlog: (id: number) => mockedGetCurrentBlog(id),
    deleteBlog: (id: number) => mockedDeleteBlog(id),
    getBlogs: () => mockedGetBlogs(),
  }),
}));

describe("BlogElement test", () => {
  it("should render component correctly when admin", () => {
    mockedUserState.mockReturnValue("admin");
    render(<BlogElement id={1} name="name" date="date" text="text" />);
    expect(screen.getByTestId("blogTitleTestId")).toBeInTheDocument();
    expect(screen.getByTestId("blogDateTestId")).toBeInTheDocument();
    expect(screen.getByTestId("blogModifyButtonTestId")).toBeInTheDocument();
    expect(screen.getByTestId("blogDeleteButtonTestId")).toBeInTheDocument();
  });
  it("should render component correctly when public", () => {
    mockedUserState.mockReturnValue("public");
    render(<BlogElement id={1} name="name" date="date" text="text" />);
    expect(screen.getByTestId("blogTitleTestId")).toBeInTheDocument();
    expect(screen.getByTestId("blogDateTestId")).toBeInTheDocument();
  });
  it("should call getCurrentBlog and getComments when clicking on title container", async () => {
    render(<BlogElement id={1} name="name" date="date" text="text" />);
    fireEvent.click(screen.getByTestId("TitleContainerTestId"));
    await waitFor(() => {
      expect(mockedGetCurrentBlog).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(mockedGetComments).toHaveBeenCalled();
    });
  });
  it("should call getCurrentBlog and getComments when clicking on date container", async () => {
    render(<BlogElement id={1} name="name" date="date" text="text" />);
    fireEvent.click(screen.getByTestId("dateContainerTestId"));
    await waitFor(() => {
      expect(mockedGetCurrentBlog).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(mockedGetComments).toHaveBeenCalled();
    });
  });
  it("should call functions when clicking on modify blog button", () => {
    mockedUserState.mockReturnValue("admin");
    render(<BlogElement id={1} name="name" date="date" text="text" />);
    fireEvent.click(screen.getByTestId("blogModifyButtonTestId"));
    expect(mockedSetCurrentBlogId).toHaveBeenCalled();
    expect(mockedSetCurrentBlogId).toHaveBeenCalledWith(1);
    expect(mockedSetCurrentBlogTitle).toHaveBeenCalled();
    expect(mockedSetCurrentBlogTitle).toHaveBeenCalledWith("name");
    expect(mockedSetCurrentBlogText).toHaveBeenCalled();
    expect(mockedSetCurrentBlogText).toHaveBeenCalledWith("text");
    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/modify");
  });
  it("should call deleteBlog and getBlog function when clicking on delete button", async () => {
    mockedUserState.mockReturnValue("admin");
    render(<BlogElement id={1} name="name" date="date" text="text" />);
    fireEvent.click(screen.getByTestId("blogDeleteButtonTestId"));
    await waitFor(() => {
      expect(mockedDeleteBlog).toHaveBeenCalledWith(1);
    });
    await waitFor(() => {
      expect(mockedGetBlogs).toHaveBeenCalled();
    });
  });
});
