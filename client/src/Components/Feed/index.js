import React from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';
import postsData from "../../MockData/PostsData";

const Feed = (props) => {

    return (
        <div className={style.feedContainer}>
            {postsData.length > 0 && postsData.map(post => (
                <PostSummary
                    key={post.id}
                    content={post}
                />
            ))}
        </div>
    );
};

export default Feed;