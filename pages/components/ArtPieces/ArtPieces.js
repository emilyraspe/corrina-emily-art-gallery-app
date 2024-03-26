import Link from "next/link.js";
import FetchArtPieces from "../../index.js";

export default function ArtPieces({pieces}){
    return(
        <ul>
            {pieces.map(piece => (
            <li key={piece.slug}>
                <h1>{piece.name}</h1>
                <p>{piece.artist}</p>
                <Link href={`/art-pieces/${piece.slug}`}><img width={"200px"} src={piece.imageSource} alt={piece.name}></img></Link>
            </li>))}
        </ul>
    )
}