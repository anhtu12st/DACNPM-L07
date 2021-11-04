import "./PostShort.scss";

const PostShort = (props) => {
    return (
        <div className="PostShort">
            <div className="VoteStatus">
                <div className="up-button" onClick={props.voteUp}/>
                <div className="upvote-num">{props.post.upVote}</div>
                <div className="down-button" onClick={props.voteDown}/>
            </div>
            <div className="ShortContent">
                <div className="PostedBy">
                    <img src={props.post.who.avatar} width="30px"/>
                    <div className="group-name">{props.post.who.groupName}</div>
                    <div className="user-name">{"Posted by " + props.post.who.userName}</div>
                </div>
                <div className="PostTitle">{props.post.title}</div>
                <div className="PostContent">{props.post.content}</div>
                <div className="ReactionBar">
                    <div className="Comment">
                        <button onClick={props.commentUp}/>
                        <div className="comment-count">{props.post.commentCount}</div>
                    </div>
                    <div className="Share">
                        <button onClick={props.shareUp}/>
                        <div className="share-count">{props.post.shareCount}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostShort;