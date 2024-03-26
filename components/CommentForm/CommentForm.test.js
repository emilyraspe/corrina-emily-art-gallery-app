import {screen, render} from "@testing-library/react";
import CommentForm from "./CommentForm.js";

test.skip("After submitting the form, the comment is appended to the list of comments", async () => {
    const mockComment = jest.fn();
    render (<CommentForm addComment={mockComment}
    ></CommentForm>)
    const user = user.setup();



})


// After submitting the form, the comment is appended to the list of comments 🖼️