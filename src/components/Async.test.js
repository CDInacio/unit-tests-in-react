import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  it("renders posts if request succeds", () => {
    render(<Async />);

    // getByRole would fail if we had more than one listItem
    // so we use getAllByRole
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
