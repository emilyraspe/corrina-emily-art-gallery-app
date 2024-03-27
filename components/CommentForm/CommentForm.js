export default function CommentForm({ slug, addComment }) {
  const now = new Date();
  const dateTime = now.toLocaleString();

  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    addComment({
      comment: comment.value,
      date: dateTime,
    });
    event.target.reset();
  }

  function handleChange(event) {
    const { value } = event.target;
    event.target.value = value.trimStart();
  }

  return (
    <form onSubmit={handleSubmit} name="form">
      <h2>Add a Comment</h2>
      <label htmlFor="comment">Add Comment</label>

      <input
        id="comment"
        type="text"
        name="comment"
        rows="3"
        maxLength="200"
        onChange={handleChange}
        required
      ></input>
      <button className="submitButton" ype="submit">
        Submit
      </button>
      {/* {formData.dateTime && <p>Submitted on: {formData.dateTime}</p>} */}
    </form>
  );
}
