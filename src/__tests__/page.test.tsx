import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Main Page", () => {
  beforeEach(() => {
    render(<Page />);
  });

  it("Renders the proper title and content text", () => {
    const timeRegEx = /([0-9]+(:[0-9]+)+)\s[AP]M/i;

    const logo = screen.getByTestId("logo");
    const heading = screen.getByRole("heading", { level: 1 });
    const subheader = screen.getByTestId("subheader");
    const location = screen.getByTestId("location");
    const time = screen.getByTestId("time");
    const content = screen.getByTestId("content");

    expect(logo.innerHTML).toEqual("KGM");
    expect(heading.innerHTML).toEqual("Kaj Grant-Mathiasen");
    expect(subheader.innerHTML).toEqual(
      "Computer Engineer / Cloud Engineer / Full-Stack Developer / "
    );
    expect(location.innerHTML).toContain("Toronto, ON. Canada");
    expect(time.innerHTML).toMatch(timeRegEx);
    expect(content.innerHTML).toEqual("Cloud Engineer I @ <b>Canonical</b>");
  });
});
