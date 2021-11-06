import React from 'react';
import style from './GroupHeader.module.sass'

const GroupCover = ({ children }) => {
  return (
      <div className={style.groupCover}>
        {children}
      </div>
  );
};

export default GroupCover;