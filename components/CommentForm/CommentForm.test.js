import {screen, render} from "@testing-library/react";
import CommentForm from "./CommentForm.js";
import userEvent from "@testing-library/user-event";

// The detail view has a list of comments for this art piece with the headline "Comments" 🖼️

test("form renders input field and submit button", () => {
    render (<CommentForm></CommentForm>)
    const input = screen.getByLabelText("Add Comment");
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
})

test("After submitting the form, the comment is appended to the list of comments", async () => {
    const mockComment = jest.fn();
    render (<CommentForm addComment={mockComment}
    ></CommentForm>)
    const user = userEvent.setup();
    const input = screen.getByLabelText("Add Comment");
    const button = screen.getByRole("button");

    await user.type(input, "Hi")
    await user.click(button);

    expect(mockComment).toHaveBeenCalled();
})

