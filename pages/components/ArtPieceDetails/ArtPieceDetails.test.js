import {screen, render} from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

test("back button and art piece image, title, artist, year and genre are displayed", () => {
    render (<ArtPieceDetails
    name= "Orange Red and Green Abstract Painting"
    artist="Steve Johnson"
    img="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
    year="2018"
    genre="Abstract Painting"
    ></ArtPieceDetails>)

    const button = screen.getByRole("button", {name: /back/i});
    const image = screen.getByAltText("Orange Red and Green Abstract Painting");
    const artist = screen.getByText("Steve Johnson");
    const year = screen.getByText("2018");
    const genre = screen.getByText("Abstract Painting");

    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(genre).toBeInTheDocument();

});

