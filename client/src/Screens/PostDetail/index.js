import { Footer } from "../../Components";
import "./style.sass";

const PostDetailScreen = () => {
    return (
        <div className="PostDetail">
            <div className="left-container">
                <PostDetailView />
            </div>
            <div className="right-container">
                <GroupAnalysis />
                <PostRelated />
                <Footer />
            </div>
        </div>
    )
}
export default PostDetailScreen;