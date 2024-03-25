import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

test("art piece image is displayed", () => {
  render(<Spotlight />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("art piece artist is displayed", () => {
  render(<Spotlight />);
  const artist = screen.getByRole("heading");
  expect(artist).toBeInTheDocument();
});
