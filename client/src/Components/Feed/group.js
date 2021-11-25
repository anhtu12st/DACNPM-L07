import React from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';

const GroupFeed = (props) => {
    var posts = [
        {
            id: 0,
            "upvote": 21,
            group: "Nhóm C++",
            user: "cuong231",
            timePosted: "October 13, 2014 11:13:00",
            title: "Lập trình hướng đối tượng",
            cont: "Lập trình hướng đối tượng (tiếng Anh: Object-oriented programming, viết tắt: OOP) là một mẫu hình lập trình dựa trên khái niệm \"công nghệ đối tượng\", mà trong đó, đối tượng chứa đựng các dữ liệu, trên các trường, thường được gọi là các thuộc tính; và mã nguồn, được tổ chức thành các phương thức. Phương thức giúp cho đối tượng có thể truy xuất và hiệu chỉnh các trường dữ liệu của đối tượng khác, mà đối tượng hiện tại có tương tác (đối tượng được hỗ trợ các phương thức \"this\" hoặc \"self\"). Trong lập trình hướng đối tượng, chương trình máy tính được thiết kế bằng cách tách nó ra khỏi phạm vi các đối tượng tương tác với nhau.[1][2] Ngôn ngữ lập trình hướng đối tượng khá đa dạng, phần lớn là các ngôn ngữ lập trình theo lớp, nghĩa là các đối tượng trong các ngôn ngữ này được xem như thực thể của một lớp, được dùng để định nghĩa một kiểu dữ liệu.",
            end: 0
        },
        {
            id: 1,
            "upvote": 20,
            group: "Nhóm C++",
            user: "cuong231",
            timePosted: "October 13, 2014 11:13:00",
            title: "Con trỏ",
            cont: "Một con trỏ (pointer) là một biến được dùng để lưu trữ địa chỉ của biến khác.",
            end: 0
        },
        {
            id: 2,
            "upvote": 21,
            group: "Nhóm C++",
            user: "cuong231",
            timePosted: "October 13, 2014 11:13:00",
            title: "Lập trình hướng đối tượng",
            cont: "Lập trình hướng đối tượng (tiếng Anh: Object-oriented programming, viết tắt: OOP) là một mẫu hình lập trình dựa trên khái niệm \"công nghệ đối tượng\", mà trong đó, đối tượng chứa đựng các dữ liệu, trên các trường, thường được gọi là các thuộc tính; và mã nguồn, được tổ chức thành các phương thức. Phương thức giúp cho đối tượng có thể truy xuất và hiệu chỉnh các trường dữ liệu của đối tượng khác, mà đối tượng hiện tại có tương tác (đối tượng được hỗ trợ các phương thức \"this\" hoặc \"self\"). Trong lập trình hướng đối tượng, chương trình máy tính được thiết kế bằng cách tách nó ra khỏi phạm vi các đối tượng tương tác với nhau.[1][2] Ngôn ngữ lập trình hướng đối tượng khá đa dạng, phần lớn là các ngôn ngữ lập trình theo lớp, nghĩa là các đối tượng trong các ngôn ngữ này được xem như thực thể của một lớp, được dùng để định nghĩa một kiểu dữ liệu.",
            end: 0
        },
        {
            id: 3,
            "upvote": 20,
            group: "Nhóm C++",
            user: "cuong231",
            timePosted: "October 13, 2014 11:13:00",
            title: "Con trỏ",
            cont: "Một con trỏ (pointer) là một biến được dùng để lưu trữ địa chỉ của biến khác.",
            end: 0
        },
        {
            id: 4,
            "upvote": 21,
            group: "Nhóm C++",
            user: "cuong231",
            timePosted: "October 13, 2014 11:13:00",
            title: "Lập trình hướng đối tượng",
            cont: "Lập trình hướng đối tượng (tiếng Anh: Object-oriented programming, viết tắt: OOP) là một mẫu hình lập trình dựa trên khái niệm \"công nghệ đối tượng\", mà trong đó, đối tượng chứa đựng các dữ liệu, trên các trường, thường được gọi là các thuộc tính; và mã nguồn, được tổ chức thành các phương thức. Phương thức giúp cho đối tượng có thể truy xuất và hiệu chỉnh các trường dữ liệu của đối tượng khác, mà đối tượng hiện tại có tương tác (đối tượng được hỗ trợ các phương thức \"this\" hoặc \"self\"). Trong lập trình hướng đối tượng, chương trình máy tính được thiết kế bằng cách tách nó ra khỏi phạm vi các đối tượng tương tác với nhau.[1][2] Ngôn ngữ lập trình hướng đối tượng khá đa dạng, phần lớn là các ngôn ngữ lập trình theo lớp, nghĩa là các đối tượng trong các ngôn ngữ này được xem như thực thể của một lớp, được dùng để định nghĩa một kiểu dữ liệu.",
            end: 0
        },
        {
            id: 5,
            "upvote": 20,
            group: "Nhóm Java",
            user: "cuong231",
            timePosted: "October 13, 2014 11:13:00",
            title: "OOP",
            cont: "OOP được xem là giúp tăng năng suất, đơn giản hóa độ phức tạp khi bảo trì cũng như mở rộng phần mềm bằng cách cho phép lập trình viên tập trung vào các đối tượng phần mềm ở bậc cao hơn. Ngoài ra, nhiều người còn cho rằng OOP dễ tiếp thu hơn cho những người mới học về lập trình hơn là các phương pháp trước đó. Một cách giản lược, đây là khái niệm và là một nỗ lực nhằm giảm nhẹ các thao tác viết mã cho người lập trình, cho phép họ tạo ra các ứng dụng mà các yếu tố bên ngoài có thể tương tác với các chương trình đó giống như là tương tác với các đối tượng vật lý.",
            end: 0
        },
        {
            id: 6,
            "upvote": 21,
            group: "Nhóm C++",
            user: "cuong231",
            timePosted: "October 13, 2014 11:13:00",
            title: "Lập trình hướng đối tượng",
            cont: "Lập trình hướng đối tượng (tiếng Anh: Object-oriented programming, viết tắt: OOP) là một mẫu hình lập trình dựa trên khái niệm \"công nghệ đối tượng\", mà trong đó, đối tượng chứa đựng các dữ liệu, trên các trường, thường được gọi là các thuộc tính; và mã nguồn, được tổ chức thành các phương thức. Phương thức giúp cho đối tượng có thể truy xuất và hiệu chỉnh các trường dữ liệu của đối tượng khác, mà đối tượng hiện tại có tương tác (đối tượng được hỗ trợ các phương thức \"this\" hoặc \"self\"). Trong lập trình hướng đối tượng, chương trình máy tính được thiết kế bằng cách tách nó ra khỏi phạm vi các đối tượng tương tác với nhau.[1][2] Ngôn ngữ lập trình hướng đối tượng khá đa dạng, phần lớn là các ngôn ngữ lập trình theo lớp, nghĩa là các đối tượng trong các ngôn ngữ này được xem như thực thể của một lớp, được dùng để định nghĩa một kiểu dữ liệu.",
            end: 0
        },
        {
            id: 7,
            "upvote": 20,
            group: "Nhóm Java",
            user: "cuong231",
            timePosted: "October 13, 2014 11:13:00",
            title: "OOP",
            cont: "OOP được xem là giúp tăng năng suất, đơn giản hóa độ phức tạp khi bảo trì cũng như mở rộng phần mềm bằng cách cho phép lập trình viên tập trung vào các đối tượng phần mềm ở bậc cao hơn. Ngoài ra, nhiều người còn cho rằng OOP dễ tiếp thu hơn cho những người mới học về lập trình hơn là các phương pháp trước đó. Một cách giản lược, đây là khái niệm và là một nỗ lực nhằm giảm nhẹ các thao tác viết mã cho người lập trình, cho phép họ tạo ra các ứng dụng mà các yếu tố bên ngoài có thể tương tác với các chương trình đó giống như là tương tác với các đối tượng vật lý.",
            end: 0
        }
    ]
    return (
        <div className={style.feedContainer}>
            {posts.length > 0 && posts.map(post => (
                <PostSummary
                    key={post.id}
                    content={post}
                />
            ))}
        </div>
    );
};

export default GroupFeed;