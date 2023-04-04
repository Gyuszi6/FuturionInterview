import { render, screen } from "@testing-library/react";
import CommentElement from "../CommentElement";

describe("CommentElement test", () => {
  it("should render component correctly", () => {
    render(<CommentElement user="user" text="text" id={1} />);
    expect(screen.getByTestId("commentCardTestId")).toBeInTheDocument();
    expect(screen.getByTestId("userNameTestId")).toBeInTheDocument();
    expect(screen.getByTestId("commentTextTestId")).toBeInTheDocument();
  });
});
