import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

const mockImage = "image-url.jpg";
const mockArtist = "Artist";

test("art piece image is displayed", () => {
  render(<Spotlight image={mockImage} />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", mockImage);
});

test("art piece artist is displayed", () => {
  render(<Spotlight artist={mockArtist} />);
  const artist = screen.getByRole("heading", { name: mockArtist });
  expect(artist).toBeInTheDocument();
});
