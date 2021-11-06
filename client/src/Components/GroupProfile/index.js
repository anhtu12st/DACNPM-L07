import React from "react";
import style from './GroupProfile.module.sass'
import { RoundButton } from '../../Components'
const GroupProfile = ({ }) => {
  return (
      <div className={style.container}>
        <div className={style.profile}>
          <div className={style.introContainer}>
            <div className={style.intro}>Học tập và chia sẽ kiến thức về C++</div>
            <RoundButton className={style.btn}>
              Đã tham gia
            </RoundButton>
          </div>
          <div className={style.name}>
            Nhóm C++
          </div>
        </div>
      </div>
  );
}

export default GroupProfile;