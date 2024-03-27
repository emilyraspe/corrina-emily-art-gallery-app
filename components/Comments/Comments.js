export default function Comments({comments}) {
    return(
        <div>
            <h2>Comments</h2>
            {comments && comments.length > 0 ? (
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.date} <br></br>
                        {comment.comment} </li>
                    ))}
                </ul>
            ) : (
                <p>No comments available</p>
            )}
        </div>
    )
}