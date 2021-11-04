import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faBurn } from '@fortawesome/free-solid-svg-icons';
import MiddleBar from "../MiddleBar";
import style from './FilterPanel.module.sass'

const FilterPanel = () => {
    return (
        <MiddleBar>
          <div className={style.contentFilter}>
            <div className={style.filterItem}>
                <FontAwesomeIcon icon={faStar}/>
                <span>Best</span>
            </div>
            <div className={style.filterItem}>
                <FontAwesomeIcon icon={faBurn}/>
                <span>Hot</span>
            </div>
            <div className={style.filterItem}>
                <FontAwesomeIcon icon={faNewspaper}/>
                <span>New</span>
            </div>
          </div>
        </MiddleBar>
    );
};

export default FilterPanel;