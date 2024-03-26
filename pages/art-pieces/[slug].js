import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails.js";

export default function ArtPieceDetailsPage({
  pieces,
  onToggleFavorite,
  isFavorite,
  artPiecesInfo,
  addComment
}) {
  const router = useRouter();
  const { slug } = router.query;
  const [selectedArtPiece, setSelectedArtPiece] = useState({});
  console.log(artPiecesInfo);

  const selectedArtPieceComments = artPiecesInfo.find(
    (piece) => piece.slug === selectedArtPiece?.slug
  )?.comments;

  useEffect(() => {
    setSelectedArtPiece(pieces.find((piece) => piece.slug === slug));
  }, [pieces, slug]);

  return (
    <ArtPieceDetails
      slug={selectedArtPiece.slug}
      name={selectedArtPiece.name}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
      img={selectedArtPiece.imageSource}
      onToggleFavorite={onToggleFavorite}
      isFavorite={isFavorite}
      artPiecesInfo={artPiecesInfo}
      comments={selectedArtPieceComments}
      addComment={(newComment) => addComment(selectedArtPiece.slug, newComment)}
    />
  );
}
