export default function FavoriteButton({
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  const foundArtPieceInfo = artPiecesInfo.find((info) => {
    return info.slug === slug;
  });

  return (
    <button className="favButton" onClick={() => onToggleFavorite(slug)}>
      <span>{foundArtPieceInfo?.isFavorite ? "❤️" : "🚫"}</span>
    </button>
  );
}
