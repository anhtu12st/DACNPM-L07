import {CommentSection, PostSummary} from "../index";

const FullPost = ({ post }) => {
  return (
      <div>
        <PostSummary
            content={post}
            isSummary={false}
        />
        <CommentSection/>
      </div>
  )
}
export default FullPost;