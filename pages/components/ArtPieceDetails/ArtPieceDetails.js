import Link from "next/link"

export default function ArtPieceDetails({name, artist, year, genre, img}) { 
    return (
        <div>
        <Link href="/art-pieces"><button>Back</button></Link>
        <h1>{name}</h1>
        <ul>
            <li>{artist}</li>
            <li>{year}</li>
            <li>{genre}</li>
        </ul>
        <img width={"200px"} src={img} alt={name}></img>
        </div>
    )
}