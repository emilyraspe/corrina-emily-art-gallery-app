import {screen, render} from "@testing-library/react";
import ArtPieceDetails from "../ArtPieceDetails/ArtPieceDetails";
import Comments from "./Comments";
test("renders comment text", () => {
        render (
            <Comments comments={[
                { comment: 'yoyyo', date: '26/03/2024, 14:14:59' },
                { comment: 'efko;ksads', date: '26/03/2024, 14:15:02' }
            ]}></Comments>
        );
        const comments = screen.getAllByRole("listitem");
        const heading = screen.getByRole("heading");
        expect(comments).toHaveLength(2);
        expect(comments[0]).toHaveTextContent("yoyyo");
        expect(comments[1]).toHaveTextContent("efko;ksads");
        expect(comments[0]).toHaveTextContent('26/03/2024, 14:14:59');
        expect(comments[1]).toHaveTextContent("26/03/2024, 14:15:02");
        expect(heading).toBeInTheDocument("");
        expect(heading).toHaveTextContent(/comments/i);

})


