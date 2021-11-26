import React from "react";
import style from './GroupProfile.module.sass'
import { RoundButton } from '../../Components'
const GroupProfile = ({group}) => {
  return (
      <div className={style.container}>
        <div className={style.profile}>
          <div className={style.introContainer}>
            <div className={style.intro}>Mô tả</div>
            <RoundButton className={style.btn}>
              Đã tham gia
            </RoundButton>
          </div>
          <div className={style.name}>
            Nhóm
          </div>
        </div>
      </div>
  );
}

export default GroupProfile;