import FetchArtPieces from "../../pages/index.js";
import FavoriteButton from "../FavortieButton/FavoriteButton.js";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <h1>{piece.name}</h1>
          <p>{piece.artist}</p>
          <img width={"200px"} src={piece.imageSource} alt={piece.name}></img>

          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            artPiecesInfo={artPiecesInfo}
            slug={piece.slug}
          />
        </li>
      ))}
    </ul>
  );
}
