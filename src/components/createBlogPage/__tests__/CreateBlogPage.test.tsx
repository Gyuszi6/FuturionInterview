import { fireEvent, render, screen } from "@testing-library/react";
import CreateBlogPage from "../CreateBlogPage";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...(jest.requireActual("react-router") as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("../CreateBlogForm", () => {
  return () => {
    return <div></div>;
  };
});

describe("CreateBlogPage test", () => {
  it("should leave page on button click", () => {
    render(<CreateBlogPage />);
    expect(
      screen.getByTestId("LeaveCreateBlogPageButtonTestId")
    ).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("LeaveCreateBlogPageButtonTestId"));
    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/home");
  });
});
