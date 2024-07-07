import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders game title", () => {
  render(<App />);
  const title = screen.getByText(/D100 Dungeon/i);
  expect(title).toBeInTheDocument();
});
