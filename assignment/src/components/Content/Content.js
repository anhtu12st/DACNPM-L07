import React from "react";
import './style.css';
import Post from "../Post/Post";

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Post/>
                <Post/>
                <Post/>
            </div>
        );
    }
}

export default Content;