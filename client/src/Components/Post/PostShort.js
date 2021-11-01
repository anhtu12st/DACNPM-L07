import "./Post.scss";

const PostShort = (props) => {
    return (
        <div className="PostShort">
            <div className="VoteStatus">
                <button className="up-button" onClick={props.voteUp}/>
                <p className="upvote-num">{props.post.upVote}</p>
                <button className="down-button" onClick={props.voteDown}/>
            </div>
            <div className="ShortContent">
                <div className="PostedBy">
                    <img src={props.post.who.avatar} width="30px"/>
                    <p className="group-name">{props.post.who.groupName}</p>
                    <p className="user-name">{"Posted by" + props.post.who.userName}</p>
                </div>
                <p className="PostTitle">{props.post.title}</p>
                <div className="PostContent">{props.post.content}</div>
                <div className="ReactionBar">
                    <div className="Comment">
                        <button onClick={props.commentUp}/>
                        <p className="comment-count">{props.post.commentCount}</p>
                    </div>
                    <div className="Share">
                        <button onClick={props.shareUp}/>
                        <p className="share-count">{props.post.shareCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostShort;