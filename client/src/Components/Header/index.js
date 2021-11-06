import React from 'react';
import {faSignOutAlt, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import {ExitToApp} from '@mui/icons-material'

import style from './Header.module.sass';

const Header = ({ isLoggedIn, logOut }) => {
  return (
      <div className={style.headerBar}>
        <Link to='/'>
          <img className={style.logo} src='/images/CSEConnector.png' alt='Page Logo'/>
        </Link>
        <div className={style.searchArea}>
          {/*<span><FontAwesomeIcon icon={faSearch}/></span>*/}
          <input placeholder='Tìm kiếm trong CSE Connector'/>
          {/*<button type='submit'><FontAwesomeIcon icon={faSearch}/></button>*/}
        </div>
        <div className={style.userLogin} style={{"justify-content": isLoggedIn ? "flex-end" : "space-around"}}>
          <Link style={{display: isLoggedIn ? "none" : "block"}} to='/login' className={style.btn}>Log In</Link>
          <Link style={{display: isLoggedIn ? "none" : "block"}} to='/signup' className={style.btn}>Sign Up</Link>

          {isLoggedIn &&
          <div className={style.userDropdownList}>
            <Link to='/profile/123' >
              <FontAwesomeIcon icon={faUserCircle} className={style.userLoginIcon}/>
            </Link>
            <ExitToApp onClick={logOut} fontSize={'inherit'} className={style.userLoginIcon}/>
          </div>}

        </div>
      </div>
  );
}

export default Header;