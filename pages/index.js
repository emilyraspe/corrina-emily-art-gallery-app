import useSWR from "swr";
import ArtPieces from "./components/ArtPieces/ArtPieces";
import Spotlight from "./components/Spotlight/Spotlight";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function RandomArtPiece() {
  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);
  if (error) return <div>Failed to Load</div>;
  if (isLoading) return <div>loading...</div>;

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
      {/*   <ArtPieces pieces={pieces} /> */}
    </>
  );
}
