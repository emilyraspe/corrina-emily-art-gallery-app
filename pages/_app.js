import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import { useState } from "react";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState.js";

const fetcher = async (url) => await fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  //Favorite Button
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  console.log("artPiecesInfo", artPiecesInfo);

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  //Comments
  function addComment(slug, newComment) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          if (pieceInfo.slug === slug) {
            return pieceInfo.comments
              ? {
                  ...pieceInfo,
                  comments: [...pieceInfo.comments, newComment],
                }
              : { ...pieceInfo, comments: [newComment] };
          } else {
            return pieceInfo;
          }
        })
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, comments: [newComment] }]);
    }
  }

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
        onToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        addComment={addComment}
      />
    </>
  );
}
