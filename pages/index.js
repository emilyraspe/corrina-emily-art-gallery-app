import useSWR from "swr";
import ArtPieces from "./components/ArtPieces/ArtPieces";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FetchArtPieces() {
  const {data: pieces, error, isLoading} = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);
  if (error) return <div>Failed to Load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <ArtPieces pieces={pieces} />
  )
}

