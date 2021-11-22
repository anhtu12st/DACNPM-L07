import React from 'react';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { ExitToApp } from '@mui/icons-material'

import style from './Header.module.sass';
import { useUserContext } from '../../Contexts/UserContext';

const Header = () => {
  const { isAuthenticated, logout, userState } = useUserContext();

  return (
    <div className={style.headerBar}>
      <Link to='/'>
        <img className={style.logo} src='/images/CSEConnector.png' alt='Page Logo' />
      </Link>
      <div className={style.searchArea}>
        {/*<span><FontAwesomeIcon icon={faSearch}/></span>*/}
        <input placeholder='Tìm kiếm trong CSE Connector' />
        {/*<button type='submit'><FontAwesomeIcon icon={faSearch}/></button>*/}
      </div>
      <div className={style.userLogin} style={{ "justify-content": isAuthenticated() ? "flex-end" : "space-around" }}>
        <Link style={{ display: isAuthenticated() ? "none" : "block" }} to='/login' className={style.btn}>Log In</Link>
        <Link style={{ display: isAuthenticated() ? "none" : "block" }} to='/signup' className={style.btn}>Sign Up</Link>

        {isAuthenticated() &&
          <div className={style.userDropdownList}>
            <Link to={`/profile/${userState?.userInfo?.id}`} >
              <FontAwesomeIcon icon={faUserCircle} className={style.userLoginIcon} />
            </Link>
            <Link to="/">
              <ExitToApp onClick={logout} fontSize={'inherit'} className={style.userLoginIcon} />
            </Link>
          </div>}

      </div>
    </div>
  );
}

export default Header;