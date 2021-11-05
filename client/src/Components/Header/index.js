import React from 'react';
import {faChevronDown, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import style from './Header.module.sass';

const Header = () => {
  return (
      <div className={style.headerBar}>
        <Link to='/'>
          <img className={style.logo} src='/images/CSEConnector.png' alt='Page Logo'/>
        </Link>
        <div className={style.searchArea}>
          {/*<span><FontAwesomeIcon icon={faSearch}/></span>*/}
          <input placeholder='Search CSE Connector'/>
          {/*<button type='submit'><FontAwesomeIcon icon={faSearch}/></button>*/}
        </div>
        <div className={style.userLogin}>
          <button className={style.btn}>Login</button>
          <button className={style.btn}> Sign Up</button>
          <div className={style.userDropdownList}>
            <FontAwesomeIcon icon={faUser}/>
            <FontAwesomeIcon icon={faChevronDown}/>
          </div>
        </div>
      </div>
  );
}

export default Header;