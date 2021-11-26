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
          {(groups.length > 0) && groups.map((group, idx) =>
            <Link key={idx} to={`/group/${group._id}`} className={style.listGroup} style={{textDecoration: 'none', color: 'black'}}>
              <div className={style.group} key={group.id}>
                <I icon={faUserCircle} className={style.groupAvatar}/>
                <div className={style.groupName}>{group.title}</div>
              </div>
            </Link>
          )}
      </SidePanel>
  )
}

export default GroupFollowing;