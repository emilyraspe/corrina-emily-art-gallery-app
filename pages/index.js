import useSWR from "swr";
import ArtPieces from "./components/ArtPieces/ArtPieces";
import Spotlight from "./components/Spotlight/Spotlight";

export default function SpotlightPage() {
    const spotlightPiece =
    pieces[Math.floor(Math.random() * (pieces.length - 1))];

  console.log("Spotlight", spotlightPiece);

  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      ></Spotlight>
    </>
  );
}
