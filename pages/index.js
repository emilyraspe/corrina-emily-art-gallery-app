import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import Spotlight from "../components/Spotlight/Spotlight";
import FavoriteButton from "../components/FavortieButton/FavoriteButton";

export default function SpotlightPage({ pieces, onToggleFavorite }) {
  const spotlightPiece =
    pieces[Math.floor(Math.random() * (pieces.length - 1))];

  console.log("Spotlight", spotlightPiece);

  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
        slug={spotlightPiece.slug}
        onToggleFavorite={onToggleFavorite}
      ></Spotlight>
    </>
  );
}
