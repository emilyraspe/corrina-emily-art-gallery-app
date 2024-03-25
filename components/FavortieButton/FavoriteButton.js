export default function FavoriteButton({
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  const foundArtPieceInfo = artPiecesInfo.find((info) => {
    return info.slug === slug;
  });
  console.log("foundArtPieceInfo", foundArtPieceInfo);

  return (
    <button onClick={() => onToggleFavorite(slug)}>
      <span>{foundArtPieceInfo?.isFavorite ? "❤️" : "🚫"}</span>
    </button>
  );
}

// find piece inside pieces array

// for every artwork id/slug
// is it favourite or not
// initial state --> is not favourite --> if button is clicked the first time, new info stored
// if it has never been clicked it needs to be added to the array of the state,
// if it has been clicked it needs to be find(by slug) and toggle liked/notliked
