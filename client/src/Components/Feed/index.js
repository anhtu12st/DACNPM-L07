import React from 'react';
import PostSummary from '../PostSummary'
import style from './Feed.module.sass';

const Feed = ( {posts} ) => {

    return (
        <div className={style.feedContainer}>
            {posts.map(post => (
                <PostSummary
                    key={post.id}
                    content={post}
                />
            ))}
        </div>
    );
};

export default Feed;