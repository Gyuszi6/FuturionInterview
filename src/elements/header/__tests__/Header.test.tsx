import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";

const mockedSetUser = jest.fn();

jest.mock("../../../store/states/userSlice", () => ({
  SET_USER: (string: string | null) => mockedSetUser(string),
}));

const mockedDispatch = jest.fn();

jest.mock("../../../store/hooks/useRedux", () => ({
  useAppDispatch: () => mockedDispatch,
}));

describe("Header test", () => {
  it("should render component correctly", () => {
    render(<Header />);
    expect(screen.getByTestId("publicButtonTestId")).toBeInTheDocument();
    expect(screen.getByTestId("adminButtonTestId")).toBeInTheDocument();
  });
  it("should call SET_USER with on public button click", () => {
    render(<Header />);
    fireEvent.click(screen.getByTestId("publicButtonTestId"));
    expect(mockedSetUser).toHaveBeenCalled();
    expect(mockedSetUser).toHaveBeenCalledWith("public");
  });
  it("should call SET_USER on admin button click", () => {
    render(<Header />);
    fireEvent.click(screen.getByTestId("adminButtonTestId"));
    expect(mockedSetUser).toHaveBeenCalled();
    expect(mockedSetUser).toHaveBeenCalledWith("admin");
  });
});
