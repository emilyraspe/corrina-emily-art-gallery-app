import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import { useState } from "react";

const fetcher = async (url) => await fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  //Favorite Button
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  console.log("artPiecesInfo", artPiecesInfo);
  function handleToggleFavourite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) =>
          piece.slug === slug ? { slug, isFavorite: !piece.isFavorite } : piece
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  //

  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);
  if (error) return <div>Failed to Load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Layout />
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={pieces}
        onToggleFavorite={handleToggleFavourite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
