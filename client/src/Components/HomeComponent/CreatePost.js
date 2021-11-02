import "./CreatePost.scss";

const CreatePost = (props) => {
    return (
        <div className="CreatePost">
            <img src={props} width="30px"/>
            <div className="post-input">Tạo bài viết</div>
            <div className="post-button">Đăng</div>
        </div>
    )
}

export default CreatePost;