import React from 'react';
import style from './RoundButton.module.sass'
const RoundButton = ({ children, onClick, className }) => {
  return (
      <button className={`${style.btnContainer} ${className && className}`} onClick={onClick}>
        {children}
      </button>
  );
};

export default RoundButton;