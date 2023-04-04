import { render, screen } from "@testing-library/react";
import BlogDisplayPage from "../BlogDisplayPage";

const mockedBackToMainPage = jest.fn();

jest.mock("../hooks/useBlogDisplayPage", () => ({
  __esModule: true,
  default: () => ({
    backToMainPage: mockedBackToMainPage,
  }),
}));

const mockedGetComments = jest.fn();

jest.mock("../../../elements/comments/hooks/useComment", () => ({
  __esModule: true,
  default: () => ({
    getComments: (id: string | number | null) => mockedGetComments(id),
  }),
}));

const mockedCurrentBlogImg = jest.fn();
const mockedCurrentBlogId = jest.fn();

jest.mock("../../../store/hooks/useRedux", () => ({
  useAppSelector: () => ({
    currentBlogTitle: jest.fn(),
    currentBlogText: jest.fn(),
    currentBlogImg: mockedCurrentBlogImg(),
    currentBlogId: mockedCurrentBlogId(),
    comments: [],
  }),
}));

describe("BlogDisplayPage component", () => {
  it("should call getComments function after render", () => {
    mockedCurrentBlogId.mockReturnValue("mockId");
    render(<BlogDisplayPage />);
    expect(mockedGetComments).toHaveBeenCalled();
    expect(mockedGetComments).toHaveBeenCalledWith("mockId");
  });

  it("should render correctly", () => {
    mockedCurrentBlogImg.mockReturnValue("");
    mockedCurrentBlogId.mockReturnValue("mockId");
    render(<BlogDisplayPage />);
    expect(screen.getByTestId("leavePageButtonTestId")).toBeInTheDocument();
    expect(screen.getByTestId("currentBlogCardTestId")).toBeInTheDocument();
    expect(
      screen.queryByTestId("currentBlogImgTestId")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("currentBlogTitleTestId")).toBeInTheDocument();
    expect(screen.getByTestId("currentBlogTextTestId")).toBeInTheDocument();
  });

  it("should render img when we have", () => {
    mockedCurrentBlogImg.mockReturnValue("img");
    render(<BlogDisplayPage />);
    expect(screen.getByTestId("currentBlogImgTestId")).toBeInTheDocument();
  });
});
