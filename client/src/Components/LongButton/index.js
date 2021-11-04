import React from 'react';
import style from './LongButton.module.sass';
import "./style.sass";

const LongButton = ({ content, backGColor }) => {
  return (
      <button className={`${style.longBtn} ${backGColor}`}>
        {content}
      </button>
  );
};

export default LongButton;