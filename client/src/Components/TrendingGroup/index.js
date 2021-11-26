import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import SidePanel from "../SidePanel";
import style from './TrendingGroup.module.sass';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {fetchTrendingGroup} from '../../Services/Group';

const TrendingGroup = () => {
  const [data, setGroupsData] = useState()
  useEffect( () => {
    const fetchData = async() => {
      const data = await fetchTrendingGroup()
      setGroupsData(data)
    }
    fetchData()
  }, [])
  const title = 'Nhóm thịnh hành'
  return (
    <SidePanel title={title}>
      {!!data && data.map((group) =>
        <Link to={`/group/${group._id}`} className={style.listGroup} style={{ textDecoration: 'none', color: 'black'}} >
            <div className={style.group} key={group._id}>
              <I icon={faUserCircle} className={style.groupAvatar}/>
              <div className={style.groupName}>{group.title}</div>
            </div>
        </Link>
      )}
    </SidePanel>
  )
}

export default TrendingGroup;