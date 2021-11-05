import React from 'react';
import style from './MiddleBar.module.sass'

const MiddleBar = ({ children }) => {
  return (
      <div className={style.middleBar}>
        {children}
      </div>
  );
};

export default MiddleBar;