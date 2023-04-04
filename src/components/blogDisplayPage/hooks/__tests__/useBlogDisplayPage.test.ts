import { renderHook } from "@testing-library/react";
import useBlogDisplayPage from "../useBlogDisplayPage";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...(jest.requireActual("react-router") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("useBlogDisplayPage hook", () => {
  it("should work correctly when call backToMainPage", () => {
    const { result } = renderHook(useBlogDisplayPage);
    result.current.backToMainPage();
    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/home");
  });
});
