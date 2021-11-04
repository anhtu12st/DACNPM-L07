import React from "react";
import {groupTrendingData} from "./data";
import SidePanel from "../SidePanel";
import style from './TrendingGroup.module.sass';

const TrendingGroup = (props) => {
  const title = 'Trending Groups'
  return (
    <SidePanel title={title}>
      <div className={style.listGroup}>
        {(groupTrendingData.length > 0) && groupTrendingData.map((group) =>
            <div className={style.group} key={group.id}>
              <div className={style.groupName}>{group.name}</div>
            </div>
        )}
      </div>
    </SidePanel>
  )
}

export default TrendingGroup;