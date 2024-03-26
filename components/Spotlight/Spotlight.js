import FavoriteButton from "../FavortieButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  isFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <>
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(slug)}
        isFavorite={isFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <h1>{artist}</h1>
      <img width={"250px"} src={image}></img>
    </>
  );
}
