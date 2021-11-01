import React, {useState} from 'react';
import PostShort from "./PostShort";

const PostContainer = (props) => {
    // var postData = props.postData;
    var postData = [
        {
          'id': 1,
          'who': {
            'avatar': '',
            'groupName': 'Nhom C++',
            'userName': 'hoaibao'
          },
          "title": "Huong dan lap trinh C++",
          "content": "Khi bắt đầu học lập trình, có rất nhiều ngôn ngữ để lựa chọn. C/C++ là một ngôn ngữ lâu đời, có tốc độ nhanh, các kiểu dữ liệu rõ ràng. Nếu như làm chủ được ngôn ngữ nền tảng như C/C++ thì sau này học các ngôn ngữ khác trở nên dễ dàng hơn, do đó rất phù hợp với người mới bắt đầu. Học lập trình C/C++ có rất nhiều ứng dụng và mở ra cho bạn cực kỳ đa dạng các cơ hội để làm việc cho các công ty/tập đoàn lớn.",
          "upVote": 0,
          "commentCount": 0,
          "shareCount": 0
        }
    ]
    const [upVote, setUpVote] = useState(postData[0].upVote);
    const [commentCount, setCommentCount] = useState(postData[0].commentCount);
    const [shareCount, setShareCount] = useState(postData[0].shareCount);

    const voteUp = () => {
        setUpVote(parseInt(upVote)+1);
    }
    const voteDown = () => {
        setUpVote(parseInt(upVote)-1);
    }
    const commentUp = () => {
        setCommentCount(parseInt(commentCount)+1);
    }
    const shareUp = () => {
        setShareCount(parseInt(shareCount)+1)
    }
    const post = postData[0];
    return (
        <div className="PostContainer">
            <PostShort key={post.id} post={post} voteUp={voteUp} voteDown={voteDown} commentUp={commentUp} shareUp={shareUp}/>
            {/* {(postData.length > 0) && postData.map((post) => {
                <PostShort key={post.id} post={post} voteUp={voteUp} voteDown={voteDown} commentUp={commentUp} shareUp={shareUp}/>
            })} */}
        </div>
    )
}

export default PostContainer;