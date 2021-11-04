import React from 'react';
import style from './LongButton.module.sass';

const LongButton = ({ content }) => {
  return (
      <button className={style.longBtn}>
        {content}
      </button>
  );
};

export default LongButton;