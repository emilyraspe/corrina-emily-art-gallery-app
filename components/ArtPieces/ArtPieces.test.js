import {render, screen} from "@testing-library/react";
import ArtPieces from "./ArtPieces";

const mockPieces = [
    { slug: "piece-1", name: "Piece 1", artist: "Artist 1", imageSource: "image1.jpg" },
    { slug: "piece-2", name: "Piece 2", artist: "Artist 2", imageSource: "image2.jpg" },
];

test("renders art pieces as a list", () => {
    render (<ArtPieces pieces={mockPieces}></ArtPieces>)
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
})

test("each artwork's image is displayed", () => {
    render (<ArtPieces pieces={mockPieces}></ArtPieces>)
    const image = screen.getAllByRole("img");
    expect(image.length).toBe(2);
}) 

test("each artwork's title is displayed", () => {
    render (<ArtPieces pieces={mockPieces}></ArtPieces>)
    const heading = screen.getAllByRole("heading");
    expect(heading.length).toBe(2);

}) 
test("each artwork's artist is displayed", () => {
    render (<ArtPieces pieces={mockPieces}></ArtPieces>)
    const artist1 = screen.getByText(/Artist 1/i);
    expect(artist1).toBeInTheDocument();
    const artist2 = screen.getByText(/Artist 2/i);
    expect(artist1).toBeInTheDocument();

})