import {CommentSection, PostSummary} from "../index";

const FullPost = ({ post }) => {
  return (
      <div>
        <PostSummary
            content={post}
            isSummary={false}
        />
        <CommentSection post={post} />
      </div>
  )
}
export default FullPost;