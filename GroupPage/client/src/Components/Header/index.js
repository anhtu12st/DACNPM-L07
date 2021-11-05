import React from 'react';
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import style from './Header.module.sass';

const Header = (props) => {
    return (
        <div className={style.headerBar}>
            <Link to='/'>
              <img className={style.logo} src='/images/CSEConnector.png' alt='Page Logo'/>
            </Link>
            <div className={style.searchArea}>
                <input placeholder='Search CSE Connector'/>
                <button type='submit'><FontAwesomeIcon icon={faSearch}/></button>
            </div>
            <div className={style.userLogin} style={{"justify-content"  : props.isLoggedIn ? "flex-end" : "space-around"}}>
                <Link style={{display: props.isLoggedIn ? "none" : "block"}} to='/login' className={style.btn}>Login</Link>
                <Link style={{display: props.isLoggedIn ? "none" : "block"}} to='/signup' className={style.btn}>Sign Up</Link>
                <div className={style.userDropdownList} style={{
                    display: props.isLoggedIn ? "flex" : "none"
                }}>
                    <FontAwesomeIcon icon={faUser}/>
                    <div onClick={props.logOut}><FontAwesomeIcon icon={faSignOutAlt}/></div>
                </div>
            </div>
        </div>
    );
}

export default Header;