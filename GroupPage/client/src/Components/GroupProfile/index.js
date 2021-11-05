import React from "react";
import './style.sass';

const GroupProfile = () => {
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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png"
                    alt=""
                    width = "100"
                    height = "100"
                />
            </div>
            <div className="title">
                <div className="name">Nhóm C++</div>
                <div className="takepart">
                    <button className="button"> + THAM GIA </button>
                </div>
            </div>
            <div className="description">Nhóm hỏi đáp và hướng dẫn về C++</div>
        </div>
    );
}

export default GroupProfile;