import {render, screen} from "@testing-library/react";
import Layout from "../Layout/Layout";

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
