import {CommentSection, PostSummary} from "../index";

const FullPost = ({ post }) => {
    // var dataPost = {
    //     id: 0,
    //     "upvote": 21,
    //     group: "Nhóm C++",
    //     user: "cuong231",
    //     timePosted: "October 13, 2014 11:13:00",
    //     title: "Lập trình hướng đối tượng",
    //     cont: "Lập trình hướng đối tượng (tiếng Anh: Object-oriented programming, viết tắt: OOP) là một mẫu hình lập trình dựa trên khái niệm \"công nghệ đối tượng\", mà trong đó, đối tượng chứa đựng các dữ liệu, trên các trường, thường được gọi là các thuộc tính; và mã nguồn, được tổ chức thành các phương thức. Phương thức giúp cho đối tượng có thể truy xuất và hiệu chỉnh các trường dữ liệu của đối tượng khác, mà đối tượng hiện tại có tương tác (đối tượng được hỗ trợ các phương thức \"this\" hoặc \"self\"). Trong lập trình hướng đối tượng, chương trình máy tính được thiết kế bằng cách tách nó ra khỏi phạm vi các đối tượng tương tác với nhau.[1][2] Ngôn ngữ lập trình hướng đối tượng khá đa dạng, phần lớn là các ngôn ngữ lập trình theo lớp, nghĩa là các đối tượng trong các ngôn ngữ này được xem như thực thể của một lớp, được dùng để định nghĩa một kiểu dữ liệu.",
    //     end: 0
  // }
  return (
      <div>
        <PostSummary
            key={post.id}
            content={post}
            isSummary={false}

        />
        <CommentSection/>
      </div>
  )
}
export default FullPost;