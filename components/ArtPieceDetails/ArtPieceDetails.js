import Link from "next/link";
import FavoriteButton from "../FavortieButton/FavoriteButton";

export default function ArtPieceDetails({
  name,
  artist,
  year,
  genre,
  img,
  slug,
  onToggleFavorite,
  isFavorite,
  artPiecesInfo,
}) {
  return (
    <div>
      <Link href="/art-pieces">
        <button>Back</button>
      </Link>
      <h1>{name}</h1>
      <ul>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
      <img width={"200px"} src={img} alt={name}></img>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
    </div>
  );
}
