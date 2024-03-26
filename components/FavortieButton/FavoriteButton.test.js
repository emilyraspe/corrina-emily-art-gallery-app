import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteButton from "./FavoriteButton";

test("button toggles", async () => {
  const mockToggleFavorite = jest.fn();

  const mockArtPiecesInfo = [{ slug: "example-slug", isFavorite: false }];
  const mockSlug = "example-slug";

  render(
    <FavoriteButton
      artPiecesInfo={mockArtPiecesInfo}
      slug={mockSlug}
      onToggleFavorite={mockToggleFavorite}
    />
  );

  const button = screen.getByRole("button");
  await userEvent.click(button);

  expect(mockToggleFavorite).toHaveBeenCalled();
});
