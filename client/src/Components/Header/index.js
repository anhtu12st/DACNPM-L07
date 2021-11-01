import React from 'react';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div id='header-bar'>
            <Link to='/'>
              <img id='logo' src='/images/CSEConnector.png' alt='image'/>
            </Link>
            <div id='search-area'>
                <input placeholder='Search CSE Connector'/>
                <button type='submit'><FontAwesomeIcon icon={faSearch}/></button>
            </div>
            <div id='user-login'>
                <button className='small-btn'>Login</button>
                <button className='small-btn'> Sign Up</button>
                <div id='user-dropdown-list'>
                    <FontAwesomeIcon icon={faUser}/>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </div>
            </div>
        </div>
    );
}

export default Header;