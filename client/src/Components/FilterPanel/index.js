import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faBurn } from '@fortawesome/free-solid-svg-icons';

const FilterPanel = () => {
    return (
        <div className='mid-container' id='content-filter'>
            <div className='filter-item'>
                <FontAwesomeIcon icon={faStar}/>
                <span>Best</span>
            </div>
            <div className='filter-item'>
                <FontAwesomeIcon icon={faBurn}/>
                <span>Hot</span>
            </div>
            <div className='filter-item'>
                <FontAwesomeIcon icon={faNewspaper}/>
                <span>New</span>
            </div>
        </div>
    );
};

export default FilterPanel;