import './GroupFollowing.module.sass'
import SidePanel from "../SidePanel";
import style from './GroupFollowing.module.sass'

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

  const title = "Nhom Theo Doi"

  return (
        <SidePanel title={title}>
            <div className={style.listGroup}>
                {(data.length > 0) && data.map((group) =>
                    <div className={style.group} key={group.id}>
                        <div className={style.groupName}>{group.name}</div>
                    </div>
                )}
            </div>
        </SidePanel>
  )
}

export default GroupFollowing;