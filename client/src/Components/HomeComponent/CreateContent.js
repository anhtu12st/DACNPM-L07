import "./CreateContent.scss";
const CreateContent = () => {
    return (
        <div className="CreateContent">
            <div className="title">Bạn có thể tạo bài viết hoặc nhóm riêng tại đây</div>
            <div className="list-button">
                <div className="button post-button">Tạo bài viết</div>
                <div className="button group-button">Tạo nhóm</div>
            </div>
        </div>
    )
}

export default CreateContent;