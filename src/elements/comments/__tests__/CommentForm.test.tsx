import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CommentForm from "../CommentForm";
import userEvent from "@testing-library/user-event";

const mockedCurrentBlogId = jest.fn();

jest.mock("../../../store/hooks/useRedux", () => ({
  useAppSelector: () => ({
    currentBlogId: mockedCurrentBlogId(),
  }),
}));

const mockedCreateComment = jest.fn();
const mockedGetComments = jest.fn();

jest.mock("../hooks/useComment", () => ({
  __esModule: true,
  default: () => ({
    createComment: (userName: string, comment: string) =>
      mockedCreateComment(userName, comment),
    getComments: (id: number | null | string) => mockedGetComments(id),
  }),
}));

describe("CommentForm test", () => {
  it("should render page correctly", () => {
    render(<CommentForm />);
    expect(screen.getByTestId("createCommentButtonTestId")).toBeInTheDocument();
    expect(screen.getByTestId("commentTextAreaTestId")).toBeInTheDocument();
    expect(screen.getByTestId("userNameInputTestId")).toBeInTheDocument();
  });
  it("should call getBlogsFromCurrentPage and createBlog function on button click", async () => {
    render(<CommentForm />);
    userEvent.type(screen.getByTestId("commentTextAreaTestId"), "username");
    userEvent.type(screen.getByTestId("userNameInputTestId"), "comment text");

    fireEvent.click(screen.getByTestId("createCommentButtonTestId"));

    await waitFor(() => {
      expect(mockedCreateComment).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(mockedGetComments).toHaveBeenCalled();
    });
  });
});
