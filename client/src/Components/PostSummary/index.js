import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown, faCaretSquareUp } from "@fortawesome/free-regular-svg-icons";
import style from './PostSummary.module.sass';
import MiddleBar from "../MiddleBar";

import { useEffect, useState } from 'react';

const PostSummary = ({ content, isSummary, handleVote }) => {
    const [timePasseds, settimePassed] = useState(0)
    const [timeUnits, settimeUnit] = useState('ngày')
    useEffect(() => {
        const MS_PER_HOUR = 60 * 60 * 1000
        const MS_PER_MINUTE = 60 * 1000
        let timePassed = Math.floor((new Date() - new Date(content.created)) / MS_PER_MINUTE)
        let timeUnit = 'phút'
        if (timePassed > 59){
            timePassed = Math.floor((new Date() - new Date(content.created)) / MS_PER_HOUR)
            timeUnit = 'giờ'
            if (timePassed >= 24) {
                timePassed = Math.floor(timePassed / 24)
                timeUnit = 'ngày'
                if (timePassed >= 31) {
                    timePassed = Math.floor(timePassed / 31)
                    timeUnit = 'tháng'
                    if (timePassed >= 12) {
                        timePassed = Math.floor(timePassed / 12)
                        timeUnit = 'năm'
                    }
                }
            }
        }
        settimePassed(timePassed)
        settimeUnit(timeUnit)
    }, []);

    const handleUpvote = (e) => {
        e.preventDefault()
        handleVote(content.id, 1)
    }

    const handleDownvote = (e) => {
        e.preventDefault()
        handleVote(content.id, -1)
    }
    let voteStyle = undefined
    if (content.vote_value > 0) {
        voteStyle = style.upvoteActive
    }
    else if (content.vote_value < 0) {
        voteStyle = style.downvoteActive
    }
    return (
        <MiddleBar>
            <div className={style.flexContainer}>
                <div className={`${style.voting} ${!isSummary && style.inFullPost}`}>
                    <div
                        onClick={ handleUpvote }
                        className={[style.voteBtn, content.vote_value === 1 ? voteStyle : undefined].join(' ')}>
                        <FontAwesomeIcon icon={faCaretSquareUp}/>
                    </div>
                    <span className={[style.upvoteCount, voteStyle].join(' ')}>{content.vote_count}</span>
                    <div
                        onClick={ handleDownvote }
                        className={[style.voteBtn, content.vote_value === -1 ? voteStyle : undefined].join(' ')}>
                        <FontAwesomeIcon icon={faCaretSquareDown}/>
                    </div>
                </div>
                <div className={style.postContent}>
                    <div className={style.postInfoContent}>
                        { isSummary && <FontAwesomeIcon icon={faUserCircle} className={style.groupAvatar}/> }
                        { isSummary && <span className={style.groupLabel}>{content.group.title}</span> }

                        <span className={style.postInfo}>Đăng bởi {content.author.username} {timePasseds} {timeUnits} trước</span>
                    </div>
                    <label>{content.title}</label>
                    <div className={style.post_content}>{content.text}</div>
                </div>
            </div>
        </MiddleBar>
    );
};

export default PostSummary;