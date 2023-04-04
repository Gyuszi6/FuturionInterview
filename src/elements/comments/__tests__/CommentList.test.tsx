import { render, screen } from "@testing-library/react";
import CommentList from "../CommentList";

jest.mock("../../../store/hooks/useRedux", () => ({
  useAppSelector: () => ({
    comments: [],
  }),
}));

jest.mock("../CommentForm", () => {
  return () => {
    return <div></div>;
  };
});

describe("CommentList test", () => {
  it("should render component correctly", () => {
    render(<CommentList />);
    expect(screen.getByTestId("commentContainerTestId")).toBeInTheDocument();
    expect(screen.getByTestId("commentListTestId")).toBeInTheDocument();
  });
});
