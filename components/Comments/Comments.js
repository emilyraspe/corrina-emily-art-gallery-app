export default function Comments({comments}) {
    console.log(comments)
    return(
        <div>
            <h2>Comments</h2>
            {comments && comments.length > 0 ? (
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.comment} {comment.date}</li>
                    ))}
                </ul>
            ) : (
                <p>No comments available</p>
            )}
        </div>
    )
}