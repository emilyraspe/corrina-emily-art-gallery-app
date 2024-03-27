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
    <div className="styledDiv">
      <h1>Spotlight</h1>
      <img width={"400px"} src={image}></img>
      <h2>{artist}</h2>
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(slug)}
        isFavorite={isFavorite}
        artPiecesInfo={artPiecesInfo}
      />

    </div>
  );
}
