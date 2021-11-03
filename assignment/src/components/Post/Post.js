import React from "react";
import './style.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

class Post extends React.Component {
    render() {
        return (
            <div className = "Post">
                <div className="updown">
                    <ArrowDropUpIcon className="up"/>
                    <div className="vote">30</div>
                    <ArrowDropDownIcon className="down"/>
                </div>
                <div className = "Content">
                    <div className = "Title">
                        <span className = "title">
                            Tiêu đề
                        </span>
                        <span className = "author">
                            Đăng bởi
                            <AccountCircleIcon className="PostPerson"/>
                            ABC lúc 08:34 ngày 31/10/2021
                        </span>
                    </div>
                    <div className = "essay">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum est impedit nisi, dicta veritatis exercitationem quaerat atque reiciendis in vitae deleniti odit possimus excepturi et? Sit eius corrupti neque nulla!
                    </div>
                    <div className = "interact">
                        <span className = "comment">
                            <CommentIcon className = "icon"/>
                            <span className="quantity">21</span>
                        </span>
                        <span className = "share">
                            <ShareIcon className = "icon"/>
                            <span className="quantity">2</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;