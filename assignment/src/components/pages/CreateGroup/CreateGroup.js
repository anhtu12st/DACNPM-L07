import React from "react";
import './style.css'
import Toolbar from "../../ToolBar/Toolbar"

class CreateGroup extends React.Component {
    render() {
        return (
            <div>
                <Toolbar/>
                <div className="CreateGroup">
                    <div className="title">
                        Tạo nhóm mới
                    </div>
                    <div>
                        <input className="name" type = "text" placeholder = "Tên"/>
                    </div>
                    <div>
                        <input className="description" type = "text" placeholder = "Mô tả"/>
                    </div>
                    <div className = "button">
                        <button className="cancel">Hủy</button>
                        <button className="create">Tạo</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateGroup;