
export default function CommentForm({slug, addComment}){
    const now = new Date();
    const dateTime = now.toLocaleString();

    function handleSubmit(event) {
        event.preventDefault();
        const { comment } = event.target.elements;
        addComment({
            comment: comment.value,
            date: dateTime});
        event.target.reset();

    }
    return(
        <form onSubmit={handleSubmit}>
        <h2>Add a Comment</h2>
        <label htmlFor="comment">Add Comment</label>
        <input id="comment" type="text" name="comment" rows="3" maxLength="200" required></input>
        <button type="submit">Submit</button>
        {/* {formData.dateTime && <p>Submitted on: {formData.dateTime}</p>} */}
        </form>
    )
}