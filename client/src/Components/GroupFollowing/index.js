import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import SidePanel from "../SidePanel";
import style from './GroupFollowing.module.sass'
import { Link } from 'react-router-dom';

const GroupFollowing = (props) => {

    const data = [
        {
          "id": 1,
          "avatar": "",
          "name": "Nhóm C++"
        },
        {
          "id": 2,
          "avatar": "",
          "name": "Nhóm Java"
        },
        {
          "id": 3,
          "avatar": "",
          "name": "Nhóm Python"
        },
        {
          "id": 4,
          "avatar": "",
          "name": "Nhóm Swift"
        }
      ]

    const title = "Nhóm theo dõi"

    return (
        <SidePanel title={title}>
            <Link to="/group" className={style.listGroup} style={{ textDecoration: 'none', color: 'black'}} >
                {(data.length > 0) && data.map((group) =>
                    <div className={style.group} key={group.id}>
                        <I icon={faUserCircle} className={style.groupAvatar}/>
                        <div className={style.groupName}>{group.name}</div>
                    </div>
                )}
            </Link>
        </SidePanel>
    )
}

export default GroupFollowing;