import React from 'react';
import style from './RoundButton.module.sass'
const RoundButton = ({ children, onClick }) => {
  return (
      <button className={style.btnContainer} onClick={onClick}>
        {children}
      </button>
  );
};

export default RoundButton;