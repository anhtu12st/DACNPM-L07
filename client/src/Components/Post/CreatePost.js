
const CreatePost = () => {
    return (
        <div className="CreatePost">
            <img src={props.post.who.avatar} width="30px"/>
            <div className="post-input"></div>
            <div className="post-button"></div>
        </div>
    )
}