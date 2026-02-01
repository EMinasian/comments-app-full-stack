import Comment from "../Comment/Comment"
import { CommentType } from "@/types/comments"

const CommentsSection = ({ comments }: { comments: CommentType[] }) => {

  return (
    <div>
      <h1>Comments Section</h1>
      <div>
        {
          comments.map(({ title, content, commentId }) => <Comment key={commentId} title={title} content={content}/>)
        }
      </div>
    </div>
  )
}

export default CommentsSection