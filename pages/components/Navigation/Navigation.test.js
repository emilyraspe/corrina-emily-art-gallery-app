import {render, screen} from "@testing-library/react";
import { useRouter } from "next/router";
import Layout from "../Layout/Layout";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({
    useRouter() {
      return {
        push: jest.fn(),
        asPath: "/",
      };
    },
  }));

test("Navigation link labeled Spotlight & Pieces is displayed", () => {
    render (<Layout></Layout>)
    const spotlightLink = screen.getByText("Spotlight");
    const piecesLink = screen.getByText("Art Pieces");
    expect(spotlightLink.tagName).toBe("A");
    expect(piecesLink.tagName).toBe("A");
    expect(spotlightLink).toHaveAttribute("href");
    expect(piecesLink).toHaveAttribute("href");
})

// test("Clicking Spotlight shows the SpotlightPage", () => {
//     const pushMock = jest.fn();
//     jest.mock("next/router", () => ({
//       useRouter() {
//         return {
//           push: pushMock,
//           asPath: "/",
//         };
//       },
//     }));
    
//     render (<Layout></Layout>);
//     const user = userEvent.setup();
//     const spotlightLink = screen.getByText("Spotlight");
//     user.click(spotlightLink);
//     expect(pushMock).toHaveBeenCalledWith('/spotlight');
// })

// test("Clicking Pieces shows the ArtPiecesPage", () => {
    
// })
