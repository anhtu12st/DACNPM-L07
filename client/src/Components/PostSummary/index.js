import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown, faCaretSquareUp } from "@fortawesome/free-regular-svg-icons";
import style from './PostSummary.module.sass';
import MiddleBar from "../MiddleBar";

const PostSummary = ({ content }) => {
    const MS_PER_HOUR = 60 * 60 * 1000
    let timePassed = Math.floor((new Date() - new Date(content.timePosted)) / MS_PER_HOUR)
    let timeUnit = 'h'
    if (timePassed >= 24) {
        timePassed = Math.floor(timePassed / 24)
        timeUnit = 'days'
    }
    return (
        <MiddleBar>
            <div className={style.voting}>
                <FontAwesomeIcon icon={faCaretSquareUp}/>
                <span className={style.upvoteCount}>{content.upvote}</span>
                <FontAwesomeIcon icon={faCaretSquareDown}/>
            </div>
            <div className={style.postContent}>
                <div className={style.postInfoContent}>
                    <FontAwesomeIcon icon={faUserCircle} className={style.groupAvatar}/>
                    <span className={style.groupLabel}>{content.group}</span>
                    <span className={style.postInfo}>Posted by {content.user} {timePassed} {timeUnit} ago</span>
                </div>
                <label>{content.title}</label>
                <div className={style.post_content}>{content.cont}</div>
            </div>
        </MiddleBar>
    );
};

export default PostSummary;