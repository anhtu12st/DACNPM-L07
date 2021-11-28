import {CommentSection, PostSummary} from "../index";

const FullPost = ({ post, handleVote }) => {
  return (
      <div>
        <PostSummary
            content={post}
            isSummary={false}
            handleVote={handleVote}
        />
        <CommentSection post={post} />
      </div>
  )
}
export default FullPost;