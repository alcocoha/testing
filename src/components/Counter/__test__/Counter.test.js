import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "..";

test("display Zero initial counts", () => {
	render(<Counter />);
	const result = screen.getByText(/Click times: 0/i);
  expect(result).toBeInTheDocument();
});

test("display new counter after click", () => {
  render(<Counter />);

  const button = screen.getByText(/click/i, { selector: 'button'});
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

	const result = screen.getByText(/click times: 3/i);
  expect(result).toBeInTheDocument();
});
