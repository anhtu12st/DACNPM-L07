import {FontAwesomeIcon as I} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

import SidePanel from "../SidePanel";
import style from './GroupFollowing.module.sass'
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import { fetchGroupFollowing } from "../../Services/GroupFollowing";

const GroupFollowing = (props) => {

  const [groups, setGroups] = useState([])
  useEffect(() => {
    const fetchData = async() => {
      const data = await fetchGroupFollowing()
      setGroups(data)
    }
    fetchData()
  }, [])
  const title = "Nhóm theo dõi"

  return (
      <SidePanel title={title}>
        <Link to="/group" className={style.listGroup} style={{textDecoration: 'none', color: 'black'}}>
          {(groups.length > 0) && groups.map((group, idx) =>
              <div className={style.group} key={idx}>
                <I icon={faUserCircle} className={style.groupAvatar}/>
                <div className={style.groupName}>{group.title}</div>
              </div>
          )}
        </Link>
      </SidePanel>
  )
}

export default GroupFollowing;