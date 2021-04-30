import React from "react";
import { render, screen } from "../test-utils";
import Band_form from "@pages/band_form";
describe("Band_form", () => {
  it("should render the heading", () => {
    render(<Band_form />);

    const heading = screen.getByText(/band registration/i);
    expect(heading).toBeInTheDocument();
  });
});
