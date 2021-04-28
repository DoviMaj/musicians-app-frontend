// test/pages/index.test.js

import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../test-utils";
import musician_form from "@pages/musician_form";

describe("musician_form", () => {
  it("should render the musician_form", () => {
    render(<musician_form />);

    const heading = screen.getByText(/Welcome to your digital career maneger/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});
