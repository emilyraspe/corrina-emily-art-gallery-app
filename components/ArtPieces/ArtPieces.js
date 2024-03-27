import Link from "next/link.js";
import FetchArtPieces from "../../pages/index.js";
import FavoriteButton from "../FavortieButton/FavoriteButton.js";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <div>
    <ul>
      {pieces.map((piece) => (
        <li className="styledDiv" key={piece.slug}>
          <h1>{piece.name}</h1>
          <Link href={`/art-pieces/${piece.slug}`}>
            <img className="clickableImg" width={"200px"} src={piece.imageSource} alt={piece.name}></img>
          </Link>
          <h2>{piece.artist}</h2>
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            artPiecesInfo={artPiecesInfo}
            slug={piece.slug}
          />
        </li>
      ))}
    </ul>
    </div>
  );
}
