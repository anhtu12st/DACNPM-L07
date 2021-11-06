import React from "react";
import style from './GroupProfile.module.sass'

const GroupProfile = ({ className }) => {
  return (
      <div className={className}>
        <div className={style.title}>
          <div className={style.name}>Nhóm C++</div>
          <div className={style.takepart}>
            <button className={style.button}> + THAM GIA</button>
          </div>
        </div>
      </div>
  );
}

export default GroupProfile;