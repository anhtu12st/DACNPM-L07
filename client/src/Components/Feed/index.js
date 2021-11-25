import React from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';
import postsData from "../../MockData/PostsData";
import { Link } from 'react-router-dom'

const Feed = ({ }) => {
    return (
        <div className={style.feedContainer}>
            {postsData.length > 0 && postsData.map((post, idx) => (
                <Link to={`/posts/${post.id}`} className={style.linkContainer} key={idx}>
                    <PostSummary
                        content={post}
                        isSummary={true}
                    />
                </Link>
            ))}
        </div>
    );
};

export default Feed;