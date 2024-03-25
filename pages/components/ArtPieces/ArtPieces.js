import FetchArtPieces from "../../index.js";

export default function ArtPieces({pieces}){
    return(
        <ul>
            {pieces.map(piece => (
            <li key={piece.slug}>
                <h1>{piece.name}</h1>
                <p>{piece.artist}</p>
                <img src={piece.imageSource} alt={piece.name}></img>
            </li>))}
        </ul>
    )
}