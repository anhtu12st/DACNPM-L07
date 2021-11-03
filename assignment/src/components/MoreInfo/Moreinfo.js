import React from "react";
import './style.css';

class Moreinfo extends React.Component {
    render() {
        return (
            <div className="MoreInfo">
                <div className="bonus">
                    <div className = "content">
                        356 thành viên <br/>
                        Nhóm được tạo ngày 10/8/2021
                    </div>
                </div>
                <div className="rule">
                    <div className="title">Nội quy</div>
                </div>
                <div className="FAQ">
                    <div className="title">Câu hỏi thường gặp</div>
                </div>
            </div>
        );
    }
}

export default Moreinfo;