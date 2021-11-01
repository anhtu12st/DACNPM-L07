import React from 'react';
import PostSummary from '../PostSummary'
const Feed = ( {posts} ) => {

    return (
        <div id='feed-container'>
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