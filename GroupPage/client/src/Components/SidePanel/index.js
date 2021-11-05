import React from 'react';
import style from './SidePanel.module.sass';
import './style.sass'

const SidePanel = ({ title, children, borderColor }) => {
  const className = `${style.sidePanel} ${borderColor}`

  return (
      <div className={className}>
        { title && <div className={style.title}>{title}</div> }
        {children}
      </div>
  );
};

export default SidePanel;