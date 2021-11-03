import React from 'react'
import Toolbar from '../../ToolBar/Toolbar'
import Content from '../../Content/Content';
import Moreinfo from '../../MoreInfo/Moreinfo';
import Groupinfo from '../../GroupInfo/Groupinfo';
import './style.css';

class Group extends React.Component {
    render() {
        return (
            <div>
                <Toolbar/>
                <div className="Infomation">
                    <div className="left">
                        <Groupinfo/>
                        <Content/>
                    </div>
                    <div className="right">
                        <Moreinfo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Group;