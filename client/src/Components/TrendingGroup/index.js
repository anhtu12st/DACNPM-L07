import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import SidePanel from "../SidePanel";
import style from './TrendingGroup.module.sass';

const TrendingGroup = (props) => {
  var data = [
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
    }
  ]
  const title = 'NHÓM THỊNH HÀNH'
  return (
    <SidePanel title={title}>
      <div className={style.listGroup}>
        {(data.length > 0) && data.map((group) =>
            <div className={style.group} key={group.id}>
              <I icon={faUserCircle} className={style.groupAvatar}/>
              <div className={style.groupName}>{group.name}</div>
            </div>
        )}
      </div>
    </SidePanel>
  )
}

export default TrendingGroup;