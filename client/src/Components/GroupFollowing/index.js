import './GroupFollowing.module.sass'
import SidePanel from "../SidePanel";
import style from './GroupFollowing.module.sass'
import groupFollowingData from './data.js';

const GroupFollowing = (props) => {

  const title = "Nhom Theo Doi"

  return (
      <SidePanel title={title}>
        <div className={style.listGroup}>
          {(groupFollowingData.length > 0) && groupFollowingData.map((group) =>
              <div className={style.group} key={group.id}>
                <div className={style.groupName}>{group.name}</div>
              </div>
          )}
        </div>
      </SidePanel>
  )
}

export default GroupFollowing;