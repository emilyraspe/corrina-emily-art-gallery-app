import Link from "next/link";
import FavoriteButton from "../FavortieButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import styled from "styled-components";

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
  colors,
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
      {colors?.map((color, index) => (
        <Div key={index} color={color}></Div>
      ))}
      <img width={"200px"} src={img} alt={name}></img>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
      <CommentForm slug={slug} addComment={addComment} />
      <Comments comments={comments} />
    </div>
  );
}

const Div = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 25px;
  width: 40px;
  padding: 20px;
  margin: 10px;
`;
