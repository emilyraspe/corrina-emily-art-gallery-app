import {screen, render} from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

// The art piece image is displayed 🖼️
// The art piece title is displayed 🖼️
// The art piece artist is displayed 🖼️
// The art piece year is displayed 🖼️
// The art piece genre is displayed 🖼️
// A back-button is displayed 🖼️

test("back button and art piece image, title, artist, year and genre are displayed", () => {
    render (<ArtPieceDetails
    name= "Orange Red and Green Abstract Painting"
    artist="Steve Johnson"
    img="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
    year="2018"
    genre="Abstract Painting"
    ></ArtPieceDetails>)

    const button = screen.getByRole("button", {name: /back/i});
    const image = screen.getBy

});

test("art piece title is displayed", () => {

});

test("art piece artist, year and genre are displayed", () => {

});

test("a back-button is displayed", () => {

});

