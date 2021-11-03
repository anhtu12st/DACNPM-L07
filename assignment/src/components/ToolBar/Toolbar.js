import React from "react";
import './style.css';
import SearchIcon from '@mui/icons-material/Search';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

class Toolbar extends React.Component {
    render() {
        return (
            <div className="toolbar">
                <div className="logo">
                    <img
                        className="logoImg"
                        src='data:image/png;base64,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'
                        alt=""
                        width="50" height="50"
                    />
                    <span className="logoIcon"/>
                </div>
                <div className="search">
                    <div className="searchbar">
                        <SearchIcon className="searchIcon"/>
                        <input className="searchInput" type="text" placeholder="search"/>
                    </div>
                </div>
                <div className="tool">
                    <div className="message">
                        <SmsIcon/>
                        <span className="msgIcon"></span>
                    </div>
                    <div className="notification">
                        <NotificationsIcon/>
                        <span className="ntfIcon"></span>
                    </div>
                    <div className="profile">
                        <AccountCircleIcon/>
                        <ArrowDropDownIcon/>
                        <span className="prfIcon"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Toolbar;

