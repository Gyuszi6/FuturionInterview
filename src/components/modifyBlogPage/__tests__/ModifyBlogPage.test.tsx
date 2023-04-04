import { fireEvent, render, screen } from "@testing-library/react";
import ModifyBlogpage from "../ModifyBlogPage";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...(jest.requireActual("react-router") as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("../ModifyBlogForm", () => {
  return () => {
    return <div></div>;
  };
});

describe("ModifyBlogPage test", () => {
  it("leave page button working well", () => {
    render(<ModifyBlogpage />);
    expect(
      screen.getByTestId("ModifyPageLeaveButtonTestId")
    ).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("ModifyPageLeaveButtonTestId"));
    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/home");
  });
});
