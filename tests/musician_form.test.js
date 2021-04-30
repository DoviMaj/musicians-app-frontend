// test/pages/index.test.js

import React from "react";
import { render, screen } from "../test-utils";
import Musician_form from "@pages/musician_form";

describe("musician_form", () => {
  it("should render the musician_form", () => {
    render(<Musician_form />);

    const heading = screen.getByText(/Musician registration/i);
    expect(heading).toBeInTheDocument();
  });
});
