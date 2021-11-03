import React from "react";
import './style.css';
import avatar from '../../avatar.png'

class Groupinfo extends React.Component {
    render() {
        return (
            <div className="GroupInfo">
                <div className="image">
                    <img
                        className="cover"
                        src="https://previews.123rf.com/images/ismagilov/ismagilov1905/ismagilov190500629/122314619-abstract-blue-digital-background-with-circuits-concept-of-hi-tech-and-computer-science-big-data-and-.jpg"
                        alt=""
                        width="800"
                        height="200"
                    />
                    <img
                        className="avatar"
                        src={avatar}
                        alt=""
                        width = "100"
                        height = "100"
                    />
                </div>
                <div className="title">
                    <div className="name">Tên nhóm</div>
                    <div className="takepart">
                        <button className="button"> + THAM GIA </button>
                    </div>
                </div>
                <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum nulla porro, cupiditate quis corporis voluptatem iure ducimus ipsa maxime quisquam inventore, ratione unde a itaque perspiciatis, nam quod saepe!</div>
            </div>
        )
    }
}

export default Groupinfo;