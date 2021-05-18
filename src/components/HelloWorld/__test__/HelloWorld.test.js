import React from "react";
import HelloWorld from "..";
import { render, screen } from "@testing-library/react";

test("render HelloWorld", () => {
	render(<HelloWorld />);
  // screen.debug();

  const title = screen.getByText(/ajua/i);
  // screen.debug(title);
  expect(title).toBeInTheDocument();
});
