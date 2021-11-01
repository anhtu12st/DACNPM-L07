import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown, faCaretSquareUp } from "@fortawesome/free-regular-svg-icons";

const PostSummary = ({ content }) => {
    const MS_PER_HOUR = 60 * 60 * 1000
    let timePassed = Math.floor((new Date() - new Date(content.timePosted)) / MS_PER_HOUR)
    let timeUnit = 'h'
    if (timePassed >= 24) {
        timePassed = Math.floor(timePassed / 24)
        timeUnit = 'days'
    }
    return (
        <div className='mid-container '>
            <div className='voting'>
                <FontAwesomeIcon icon={faCaretSquareUp}/>
                <span className='upvote-count'>{content.upvote}</span>
                <FontAwesomeIcon icon={faCaretSquareDown}/>
            </div>
            <div className='post-content'>
                <div className='post-info-container'>
                    <span className='group-label'>Group:{content.group}</span>
                    <span className='post-info'>Posted by {content.user} {timePassed} {timeUnit} ago</span>
                </div>
                <label>{content.title}</label>

            </div>
        </div>
    );
};

export default PostSummary;