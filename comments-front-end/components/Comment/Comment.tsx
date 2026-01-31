import { CommentType } from "@/types/comments"

const Comment = ({ title, content }: CommentType) => {
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  )
}

export default Comment