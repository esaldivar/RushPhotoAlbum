import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title text", () => {
  render(<App />);
  const title = screen.getByText(/Get Album Details/i);
  expect(title).toBeInTheDocument();
});
