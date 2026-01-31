import mockComments from "../../mocks/comments.json"
import Comment from "../Comment/Comment"

const CommentsSection = () => {

  return (
    <div>
      <h1>Comments Section</h1>
      <div>
        {
          mockComments.items.map(({ title, content, commentId }) => <Comment key={commentId} title={title} content={content}/>)
        }
      </div>
    </div>
  )
}

export default CommentsSection