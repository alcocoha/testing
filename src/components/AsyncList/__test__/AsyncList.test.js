import React from "react";
import { render, screen } from "@testing-library/react";
import AsyncList from '..';

test("show food list", async() => {
  render(<AsyncList/>);
  // screen.debug();
  const result = await screen.findByText(/hamburger/i);
  expect(result).toBeInTheDocument();

  expect(await screen.findByText(/pizza/i)).toBeInTheDocument();

  expect(await screen.findByText(/tacos/i)).toBeInTheDocument();

});
