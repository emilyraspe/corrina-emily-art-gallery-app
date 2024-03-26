import { useRouter } from "next/router"
import { useState } from "react";
import { useEffect } from "react";
import ArtPieceDetails from "../components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage({pieces}) {
    const router = useRouter();
    const { slug } = router.query;
    const [selectedArtPiece, setSelectedArtPiece] = useState({});

    useEffect(() => {
        setSelectedArtPiece(pieces.find((piece) => piece.slug === slug));
    },  [pieces, slug]);

    return(
                <ArtPieceDetails 
                name={selectedArtPiece.name}
                artist={selectedArtPiece.artist}
                year={selectedArtPiece.year}
                genre={selectedArtPiece.genre}
                img={selectedArtPiece.imageSource} />
    )
}
