import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function Favorites({ pieces, onToggleFavorite, artPiecesInfo }) {
  const favorites = pieces.filter((piece) => {
    const artPiece = artPiecesInfo.find((info) => info.slug === piece.slug);
    return artPiece && artPiece.isFavorite === true;
  });
  return (
    <ArtPieces
      pieces={favorites}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}

// filter through all pieces and check if the slug is safed in artPiecesInfo + isFavorite = true
