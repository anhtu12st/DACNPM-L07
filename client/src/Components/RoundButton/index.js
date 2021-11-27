import React from 'react';
import style from './RoundButton.module.sass'
const RoundButton = ({ children, onClick, className, disabled }) => {
  let btnStateCn = undefined
  if (disabled === true)
    btnStateCn = style.disabledBtn
  else if (disabled === false)
    btnStateCn = style.activeBtn
  return (
      <button className={[style.btnContainer, className, btnStateCn].join(' ')} onClick={onClick} >
        {children}
      </button>
  );
};

export default RoundButton;