import Link from "next/link";
import FavoriteButton from "../FavortieButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

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
  comments,
  addComment,
  colors
}) {

console.log(colors);

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
        {colors.map((color, index) => (
          <div key={index}>{color}</div>
        ))}
      <img width={"200px"} src={img} alt={name}></img>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
      <CommentForm slug={slug} addComment={addComment}/>
      <Comments comments={comments}/>
    </div>
  );
}

// const StyledDiv = styled.div`
// padding:25px`;
