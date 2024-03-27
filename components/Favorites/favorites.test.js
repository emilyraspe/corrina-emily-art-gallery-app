import { render, screen } from "@testing-library/react";
import Navigation from "../Navigation/Navigation";
import ArtPieces from "../ArtPieces/ArtPieces";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: "/",
    };
  },
}));

test("navigation link labeled Favorites is displayed", () => {
  render(<Navigation></Navigation>);
  const favoriesLink = screen.getByRole("link", { name: "Favorites" });
  expect(favoriesLink).toBeInTheDocument();
});

const mockPieces = [
  {
    slug: "art-piece-1",
    name: "Art Piece 1",
    artist: "Artist 1",
    imageSource: "image1.jpg",
  },
  {
    slug: "art-piece-2",
    name: "Art Piece 2",
    artist: "Artist 2",
    imageSource: "image2.jpg",
  },
];

const mockArtPiecesInfo = [
  { slug: "art-piece-1", isFavorite: true },
  { slug: "art-piece-2", isFavorite: true },
];

test("art piece's is displayed with active favorite-button", () => {
  render(
    <ArtPieces
      pieces={mockPieces}
      onToggleFavorite={() => {}}
      artPiecesInfo={mockArtPiecesInfo}
    />
  );

  expect(screen.getAllByRole("listitem")).toHaveLength(mockPieces.length);
  const favoriteButtons = screen.getAllByRole("button");
  expect(favoriteButtons).toHaveLength(mockPieces.length);
  favoriteButtons.forEach((button) => {
    const expectedText = "❤️";
    expect(button).toHaveTextContent(expectedText);
  });
});

test("each artwork's artist, title, and image is displayed", () => {
  render(
    <ArtPieces
      pieces={mockPieces}
      onToggleFavorite={() => {}}
      artPiecesInfo={mockArtPiecesInfo}
    />
  );

  const artist1 = screen.getByText(/Artist 1/i);
  expect(artist1).toBeInTheDocument();

  const image = screen.getAllByRole("img");
  expect(image.length).toBe(2);

  const heading = screen.getAllByRole("heading");
  expect(heading.length).toBe(4);
});
