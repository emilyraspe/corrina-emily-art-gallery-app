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
    <>
    <div className="styledDiv">
      <Link className="backButton" href="/art-pieces">
      <button className="backButton" >⭠</button>
      </Link>
      <h1>{name}</h1>
      <img width={"400px"} src={img} alt={name}></img>
      <div className="colorDiv">
      {colors?.map((color, index) => (
        <Div key={index} color={color}></Div>
      ))}</div>
      <ul>
        <li><strong>Artist:</strong> {artist}</li>
        <li><strong>Year:</strong> {year}</li>
        <li><strong>Genre:</strong> {genre}</li>
      </ul>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
      <CommentForm slug={slug} addComment={addComment} />
      <Comments comments={comments} />
    </div></>
  );
}

const Div = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 25px;
  width: 40px;
  padding: 20px;
  margin: 10px;
`;

